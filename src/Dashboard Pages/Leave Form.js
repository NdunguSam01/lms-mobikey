import { useState } from "react"

const LeaveForm = () => 
{
    const d=new Date()
    let currentYear=d.getFullYear()
    let month=d.getMonth() + 1
    let date=d.getDate()
    let minDateRange=""
    const maxDateRange=currentYear + "-12-31"

    if(month <= 9)
    {
        minDateRange=`${currentYear}-0${month}-0${date}`
    }
    else
    {
        minDateRange=`${currentYear}-${month}-${date}`
    }

    const [leaveFormData, setLeaveFormData]=useState(
        {
            leaveType: "",
            days: "",
            startDate: "",
            endDate: "",
            numDays: "",
            fileAttachment: "",
            reason: ""
        })
    
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

    let fileRequired=""

    if (leaveFormData.leaveType === "sick" || leaveFormData.leaveType === "paternity")
    {
        fileRequired="required"
    }
    else
    {
        fileRequired=""
    }
    
    return ( 
        <>
            <form action="" className="row g-4 mx-3">
                <h1 className="text-center text-uppercase">Leave Request Form</h1>
                <div className="col-md-12">
                    <label htmlFor="availableDays" className="form-label fs-5">Available Leave Days</label>
                    <input type="text" id="availableDays" className="form-control" placeholder="Available Leave Days" readOnly/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="leaveType" className="form-label fs-5">Leave Type</label>
                    <select id="leaveType" className="form-select" value={leaveFormData.leaveType} onChange={handleInputChange} required>
                        <option value="" selected>Select Leave Type</option>
                        <option value="normal">Normal Leave</option>
                        <option value="sick">Sick Leave</option>
                        <option value="paternity">Paternity Leave</option>
                        <option value="maternity">Maternity Leave</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="days" className="form-label fs-5">Leave Duration</label>
                    <select id="days" className="form-select" value={leaveFormData.days} onChange={handleInputChange} required>
                        <option value="" selected>Select Leave Duration</option>
                        <option value="full">Full Day</option>
                        <option value="half">Half Day</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="startDate" className="form-label fs-5">Start Date</label>
                    <input type="date" id="startDate" min={minDateRange} max={maxDateRange} className="form-control" value={leaveFormData.startDate} onChange={handleInputChange} required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="endDate" className="form-label fs-5">End Date</label>
                    <input type="date" id="endDate" min={leaveFormData.startDate} max={maxDateRange} className="form-control" value={leaveFormData.endDate} onChange={handleInputChange} required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="numDays" className="form-label fs-5">Number of days</label>
                    <input type="number" id="numDays" className="form-control" required value={leaveFormData.numDays} onChange={handleInputChange} readOnly/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="fileAttachment" className="form-label fs-5">Attach file</label>
                    <input type="file" id="fileAttachment" className="form-control" accept="image/*, application/pdf" value={leaveFormData.fileAttachment} onChange={handleInputChange} required={fileRequired}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="reason" className="form-label fs-5">Reason for leave</label>
                    <textarea name="" id="reason" cols="20" rows="1" className="form-control" value={leaveFormData.reason} onChange={handleInputChange} placeholder="Reason for leave (Optional)"></textarea>
                </div>
                <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-success fs-6">Submit request</button>
                </div>
            </form>
        </>
     );
}
 
export default LeaveForm;