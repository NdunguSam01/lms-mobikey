import LeaveBreakdown from "../Dashboard Components/Leave History Breakdown";
import StatisticsTiles from "../Dashboard Components/Statistics Tiles";
import UpcomingLeave from "../Dashboard Components/Upcoming Leave";
import  '../assets/css/statistics.css'


const Statistics = () => 
{
    return ( 
        <>
            <h1 className="text-uppercase text-center mt-2">Welcome back, Samuel Muigai</h1>
            <StatisticsTiles/>
            <div className="parent-flex">
                <LeaveBreakdown/>
                <UpcomingLeave/>
            </div>
        </>
     );
}
 
export default Statistics;