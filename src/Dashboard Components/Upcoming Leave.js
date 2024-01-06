import  '../assets/css/statistics.css'

const UpcomingLeave = () => 
{
    return ( 
        <div className="upcoming">
            <h1>Upcoming department leave</h1>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Number of days</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Employee Name">John Doe</td>
                        <td data-label="Start Date">2023-12-09</td>
                        <td data-label="End Date">2023-12-15</td>
                        <td data-label="Number of days">6</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td data-label="Employee Name">John Doe</td>
                        <td data-label="Start Date">2023-12-09</td>
                        <td data-label="End Date">2023-12-15</td>
                        <td data-label="Number of days">6</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default UpcomingLeave;