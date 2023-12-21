
const LeaveHistory = () => 
{
    return ( 
        <>
            <h1>Leave History Page</h1>
            <table className={`table table-striped table-bordered`}>
                    <thead>
                        <tr>
                        <th scope="col">Leave Type</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Number of days</th>
                        <th scope="col">File Attachment</th>
                        <th scope="col">Direct Control</th>
                        <th scope="col">General Manager</th>
                        <th scope="col">Human Resources</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Normal</td>
                        <td>2023-12-09</td>
                        <td>2023-12-15</td>
                        <td>5</td>
                        <td>NULL</td>
                        <td>Pending</td>
                        <td>Pending</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                        <td>Normal</td>
                        <td>2023-12-09</td>
                        <td>2023-12-15</td>
                        <td>5</td>
                        <td>NULL</td>
                        <td>Pending</td>
                        <td>Pending</td>
                        <td>Pending</td>
                    </tr>
                </tbody>
            </table>
        </>
     );
}
 
export default LeaveHistory;