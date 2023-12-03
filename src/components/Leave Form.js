const LeaveForm = () => {
    return ( 
        <>
            <h1 className="text-center mt-4">Leave Request Form</h1>
            <form action="" className="row g-4 m-5">
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" name="" id="firstName" className="form-control" placeholder="First Name" required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" name="" id="lastName" className="form-control" required/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="leaveType">Leave Type</label>
                    <select name="" id="leaveType" className="form-select" required>
                        <option value="#">Select leave type</option>
                        <option value="normal">Normal Leave</option>
                        <option value="paternity">Paternity Leave</option>
                        <option value="sick">Sick Leave</option>
                        <option value="maternity">Maternity Leave</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" name="" id="startDate" className="form-control" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="endDate">End Date</label>
                    <input type="date" name="" id="endDate" className="form-control" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="fileAttachment">Attach file</label>
                    <input type="file" name="" id="fileAttachment" className="form-control" required/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="reason">Reason for leave</label>
                    <textarea name="" id="reason" cols="20" rows="4" className="form-control" placeholder="Reason for leave (Optional)"></textarea>
                </div>
                <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-success">Submit request</button>
                </div>
            </form>
        </>
     );
}
 
export default LeaveForm;