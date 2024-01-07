const ViewEmployees = () => 
{
    return ( 
        <>
            <h1 className="text-uppercase text-center mt-4">All employees</h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Department</th>
                        <th scope="col">Position</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="First Name">John</td>
                        <td data-label="Last Name">Doe</td>
                        <td data-label="Email">test@test.com</td>
                        <td data-label="Department">Finance</td>
                        <td data-label="Position">Accountant</td>
                        <td data-label="Start Date">2023-12-09</td>
                        <td><button className="btn btn-danger">Disable account</button></td>
                    </tr>
                    <tr>
                        <td data-label="First Name">Jane</td>
                        <td data-label="Last Name">Doe</td>
                        <td data-label="Email">test@test.com</td>
                        <td data-label="Department">Fiance</td>
                        <td data-label="Position">Finance Director</td>
                        <td data-label="Start Date">2023-02-02</td>
                        <td><button className="btn btn-danger">Disable account</button></td>
                    </tr>
                </tbody>
            </table>
        </>
     );
}
 
export default ViewEmployees;