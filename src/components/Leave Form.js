import { NavLink } from "react-router-dom";

const LeaveForm = () => 
{
    return ( 
        <>
            <h1 className="text-center text-uppercase mt-4">Leave Request Form</h1>
            <form action="" className="row g-4 m-5">
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text"id="firstName" className="form-control" placeholder="First Name"  readOnly/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" id="lastName" className="form-control" placeholder="Last Name"  readOnly/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="department" className="form-label">Department</label>
                    <input type="text" id="department" className="form-control" placeholder="Department" readOnly required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="availableDays" className="form-label">Available Leave Days</label>
                    <input type="text" id="availableDays" className="form-control" placeholder="Available Leave Days" readOnly/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="leaveType">Leave Type</label>
                    <select id="leaveType" className="form-select" required>
                        <option value="normal">Normal Leave</option>
                        <option value="paternity">Paternity Leave</option>
                        <option value="sick">Sick Leave</option>
                        <option value="maternity">Maternity Leave</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" id="startDate" className="form-control" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="endDate">End Date</label>
                    <input type="date" id="endDate" className="form-control" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="numDays">Number of days</label>
                    <input type="number" id="numDays" className="form-control" required readOnly/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="fileAttachment">Attach file</label>
                    <input type="file" id="fileAttachment" className="form-control" required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="reason">Reason for leave</label>
                    <textarea name="" id="reason" cols="20" rows="1" className="form-control" placeholder="Reason for leave (Optional)"></textarea>
                </div>
                <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-success">Submit request</button>
                </div>
                <div className="col-md-12 text-center">
                    <NavLink to="/" className="btn btn-danger">Cancel</NavLink>
                </div>
            </form>
        </>
     );
}
 
export default LeaveForm;