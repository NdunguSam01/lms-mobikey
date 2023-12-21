const PendingRequests = () => 
{
    return ( 
        <>
            <h1>Pending Requests page</h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
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
                        <td data-label="First Name">Samuel</td>
                        <td data-label="Last Name">Muigai</td>
                        <td data-label="Leave Type">Normal</td>
                        <td data-label="Start Date">2023-12-09</td>
                        <td data-label="End Date">2023-12-15</td>
                        <td data-label="Number of days">5</td>
                        <td data-label="File Attachment">NULL</td>
                        <td data-label="HOD">Pending</td>
                        <td data-label="General Manager">Pending</td>
                        <td data-label="Human Resources">Pending</td>
                    </tr>
                    <tr>
                        <td data-label="First Name">Samuel</td>
                        <td data-label="Last Name">Muigai</td>
                        <td data-label="Leave Type">Normal</td>
                        <td data-label="Start Date">2023-12-09</td>
                        <td data-label="End Date">2023-12-15</td>
                        <td data-label="Number of days">5</td>
                        <td data-label="File Type">NULL</td>
                        <td data-label="HOD">Pending</td>
                        <td data-label="General Manager">Pending</td>
                        <td data-label="Human Resources">Pending</td>
                    </tr>
                </tbody>
            </table>
        </>
     );
}
 
export default PendingRequests;