const LeaveForm = () => 
{
    return ( 
        <>
            <form action="" className="row g-4 mx-2 mt-1">
                <h1 className="text-center text-uppercase">Leave Request Form</h1>
                <div className="col-md-12">
                    <label htmlFor="availableDays" className="form-label fs-5">Available Leave Days</label>
                    <input type="text" id="availableDays" className="form-control" placeholder="Available Leave Days" readOnly/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="leaveType" className="form-label fs-5">Leave Type</label>
                    <select id="leaveType" className="form-select" required>
                        <option value="normal">Normal Leave</option>
                        <option value="paternity">Paternity Leave</option>
                        <option value="sick">Sick Leave</option>
                        <option value="maternity">Maternity Leave</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="startDate" className="form-label fs-5">Start Date</label>
                    <input type="date" id="startDate" className="form-control" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="endDate" className="form-label fs-5">End Date</label>
                    <input type="date" id="endDate" className="form-control" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="numDays" className="form-label fs-5">Number of days</label>
                    <input type="number" id="numDays" className="form-control" required readOnly/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="fileAttachment" className="form-label fs-5">Attach file</label>
                    <input type="file" id="fileAttachment" className="form-control" required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="reason" className="form-label fs-5">Reason for leave</label>
                    <textarea name="" id="reason" cols="20" rows="1" className="form-control" placeholder="Reason for leave (Optional)"></textarea>
                </div>
                <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-success fs-6">Submit request</button>
                </div>
            </form>
        </>
     );
}
 
export default LeaveForm;