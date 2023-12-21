const ViewEmployees = () => 
{
    return ( 
        <>
            <h1>All employees</h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Department</th>
                        <th scope="col">Position</th>
                        <th scope="col">Start Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="First Name">Samuel</td>
                        <td data-label="Last Name">Muigai</td>
                        <td data-label="Email">test@test.com</td>
                        <td data-label="Department">Logistics</td>
                        <td data-label="Position">Logistics Assistant</td>
                        <td data-label="Start Date">2023-12-09</td>
                    </tr>
                    <tr>
                        <td data-label="First Name">Kennedy</td>
                        <td data-label="Last Name">Karanja</td>
                        <td data-label="Email">test@test.com</td>
                        <td data-label="Department">Fiance</td>
                        <td data-label="Position">Finance Director</td>
                        <td data-label="Start Date">2023-02-02</td>
                    </tr>
                </tbody>
            </table>
        </>
     );
}
 
export default ViewEmployees;