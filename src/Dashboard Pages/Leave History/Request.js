import { useNavigate, useParams  } from 'react-router-dom';

const Request = ({requests}) => 
{    
    const navigate=useNavigate()
    const {id}=useParams()

    const individualRequest=requests.find(request => request.id === parseInt(id))
    let { leaveType, leaveDuration, startDate, endDate, numDays, fileAttachment, reason,  directControl, generalManager, humanResources}= individualRequest

    return ( 
        <>
            <div className="row g-4 mx-3">
                <h1 className='text-uppercase'>Requests page</h1>
                <div className="col-md-6">
                    <label htmlFor="leaveType" className="form-label fs-5">Leave Type</label>
                    <input type="text" name="leaveType" id="leaveType" className="form-control fs-6" value={leaveType} readOnly/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="leaveDuration" className="form-label fs-6">Leave Duration</label>
                    <input type="text" name="leaveDuration" id="leaveDuration" className="form-control fs-6" value={leaveDuration} readOnly/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="startDate" className="form-label fs-6">Start Date</label>
                    <input type="date" name="startDate" id="startDate" className="form-control fs-6" value={startDate} readOnly/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="endDate" className="form-label fs-6">End Date</label>
                    <input type="date" name="endDate" id="endDate" className="form-control fs-6" value={endDate} readOnly/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="numDays" className="form-label fs-6">Number of days</label>
                    <input type="number" name="numDays" id="numDays" className="form-control fs-6" value={numDays} readOnly/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="fileAttachment" className="form-label fs-6">Attach file</label>
                    <p>{fileAttachment ? <a href={fileAttachment}>{fileAttachment}</a> : "No file attachment"}</p>
                </div>
                <div className="col-md-6">
                    <label htmlFor="reason" className="form-label fs-6">Reason for leave</label>
                    <textarea name="" id="reason" cols="20" rows="1" className="form-control" readOnly value={reason}></textarea>
                </div>
                <div className="col-md-4">
                    <label htmlFor="directControl" className="form-label fs-6">Direct Control</label>
                    <input type="text" name="directControl" id="directControl" className="form-control fs-6" value={directControl} readOnly/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="generalManager" className="form-label fs-6">General Manager</label>
                    <input type="text" name="generalManager" id="generalManager" className="form-control fs-6" value={generalManager} readOnly/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="humanResources" className="form-label fs-6">Human Resources</label>
                    <input type="text" name="humanResources" id="humanResources" className="form-control fs-6" value={humanResources} readOnly/>
                </div>
                <div className="col-md-12 text-center">
                    <button className="btn btn-success" onClick={() => navigate(-1)}>Go back</button>
                </div>
            </div>
        </>
     );
}
 
export default Request;