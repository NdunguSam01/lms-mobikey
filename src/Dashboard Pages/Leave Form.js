/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import MinAndMax from "../Calculations/Min and Max Dates"
import LeaveDays from "../Calculations/Leave Days"

const LeaveForm = () => 
{
    //Declaring the min and max date ranges to be used in the date pickers
    const {minDateRange, maxDateRange}=MinAndMax()
    
    //Form data state
    const [leaveFormData, setLeaveFormData]=useState(
        {
            leaveType: "",
            leaveDuration: "",
            startDate: "",
            endDate: "",
            numDays: 0,
            fileAttachment: "",
            reason: ""
        })

    //Function to handle change in the input fields by capturing the element's ID and using it to update the respective state with the new value
    const handleInputChange= e =>
    {
        const key=e.target.id
        const value=e.target.value

        setLeaveFormData(
            {
                ...leaveFormData,
                [key]: value
            })
    }

    //useEffect hook to change the endDate state back to an empty string once the startDate state changes
    useEffect(()=>
    {
        setLeaveFormData(
            {
                ...leaveFormData,
                endDate: ""
            }
        )
    },[leaveFormData.startDate])

    //useEffect hook to calculate the number of leave days once the endDate, leaveType and leaveDuration states change
    useEffect(()=>
    {
        const leaveDays=LeaveDays(leaveFormData.startDate, leaveFormData.endDate, leaveFormData.leaveType, leaveFormData.leaveDuration)
        setLeaveFormData(
            {
                ...leaveFormData,
                numDays: leaveDays
            }
        )
    },[leaveFormData.endDate, leaveFormData.leaveType, leaveFormData.leaveDuration])

    //Setting the file upload input field to required once the leave type is sick or paternity
    const fileRequired=leaveFormData.leaveType==="sick" || leaveFormData.type==="paternity" ? "required" : ""
    
    return ( 
        <>
            <form action="" className="row g-3">
                <h2 className="text-uppercase text-decoration-underline">Available Leave days</h2>
                <div className="col-md-3 mt-2">
                    <label htmlFor="normalLeaveDays" className="form-label fs-5">Normal Leave</label>
                    <input type="number" id="normalLeaveDays" className="form-control" value={21} readOnly/>
                </div>
                <div className="col-md-3 mt-2">
                    <label htmlFor="sickLeaveDays" className="form-label fs-5">Sick Leave</label>
                    <input type="number" id="sickLeaveDays" className="form-control" value={10} readOnly/>
                </div>
                <div className="col-md-3 mt-2">
                    <label htmlFor="paternityLeaveDays" className="form-label fs-5">Paternity Leave</label>
                    <input type="number" id="paternityLeaveDays" className="form-control" value={14} readOnly/>
                </div>
                <div className="col-md-3 mt-2">
                    <label htmlFor="maternityLeaveDys" className="form-label fs-5">Maternity Leave</label>
                    <input type="number" id="maternityLeaveDys" className="form-control" value={90} readOnly/>
                </div>
                <h2 className="text-uppercase text-decoration-underline mt-4">Leave request details</h2>
                <div className="col-md-6 mt-3">
                    <label htmlFor="leaveType" className="form-label fs-5">Leave Type</label>
                    <select id="leaveType" className="form-select" value={leaveFormData.leaveType} onChange={handleInputChange} required>
                        <option value="">Select Leave Type</option>
                        <option value="normal">Normal Leave</option>
                        <option value="sick">Sick Leave</option>
                        <option value="paternity">Paternity Leave</option>
                        <option value="maternity">Maternity Leave</option>
                    </select>
                </div>
                <div className="col-md-6 mt-3">
                    <label htmlFor="leaveDuration" className="form-label fs-5">Leave Duration</label>
                    <select id="leaveDuration" className="form-select" value={leaveFormData.leaveDuration} onChange={handleInputChange} required>
                        <option value="">Select Leave Duration</option>
                        <option value="full">Full Day</option>
                        <option value="half">Half Day</option>
                    </select>
                </div>
                <div className="col-md-4 mt-3">
                    <label htmlFor="startDate" className="form-label fs-5">Start Date</label>
                    <input type="date" id="startDate" min={minDateRange} max={maxDateRange} className="form-control" value={leaveFormData.startDate} onChange={handleInputChange} required/>
                </div>
                <div className="col-md-4 mt-3">
                    <label htmlFor="endDate" className="form-label fs-5">End Date</label>
                    <input type="date" id="endDate" min={leaveFormData.startDate} max={maxDateRange} className="form-control" value={leaveFormData.endDate} onChange={handleInputChange} required/>
                </div>
                <div className="col-md-4 mt-3">
                    <label htmlFor="numDays" className="form-label fs-5">Number of days</label>
                    <input type="number" id="numDays" className="form-control" required value={leaveFormData.numDays} onChange={handleInputChange} readOnly/>
                </div>
                <div className="col-md-6 mt-3">
                    <label htmlFor="fileAttachment" className="form-label fs-5">Attach file</label>
                    <input type="file" id="fileAttachment" className="form-control" accept="image/*, application/pdf" value={leaveFormData.fileAttachment} onChange={handleInputChange} required={fileRequired}/>
                </div>
                <div className="col-md-6 mt-32">
                    <label htmlFor="reason" className="form-label fs-5">Reason for leave</label>
                    <textarea name="" id="reason" cols="20" rows="1" className="form-control" value={leaveFormData.reason} onChange={handleInputChange} placeholder="Reason for leave (Optional)"></textarea>
                </div>
                <div className="col-md-12 mt-3 text-center">
                    <button type="submit" className="btn btn-success fs-6">Submit request</button>
                </div>
            </form>
        </>
     );
}
 
export default LeaveForm;