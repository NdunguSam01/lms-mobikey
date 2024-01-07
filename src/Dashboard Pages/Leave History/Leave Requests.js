import { Link } from 'react-router-dom'

const LeaveRequests = ({requests}) => 
{
    const requestTableData=requests.map(request =>
        {
            let {id, leaveType, leaveDuration, startDate, endDate, numDays}= request
            return(
                <tr key={id}>
                    <td data-label="Leave Type">{leaveType}</td>
                    <td data-label="Leave Duration">{leaveDuration}</td>
                    <td data-label="Start Date">{startDate}</td>
                    <td data-label="End Date">{endDate}</td>
                    <td data-label="Number of days">{numDays}</td>
                    <td>
                        <Link to={`/dashboard/request/${id}`}>
                            <button className="btn btn-success">View Details</button>
                        </Link>
                    </td>
                </tr>
            )
        })
    return ( 
        <>
            <h1 className="text-uppercase text-center">Leave History</h1>
            <table className="table table-striped table-bordered mt-3">
                <thead>
                    <tr>
                        <th scope="col">Leave Type</th>
                        <th scope='col'>Leave Duration</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Number of days</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {requestTableData}
                </tbody>
            </table>
        </>
     );
}
 
export default LeaveRequests;