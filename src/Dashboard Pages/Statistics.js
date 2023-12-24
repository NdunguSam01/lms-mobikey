import LeaveBreakdown from "../Dashboard Components/Leave History Breakdown";
import StatisticsTiles from "../Dashboard Components/Statistics Tiles";
import UpcomingLeave from "../Dashboard Components/Upcoming Leave";

const Statistics = () => 
{
    return ( 
        <>
            <h1 className="text-uppercase text-center">Welcome back, Samuel Muigai</h1>
            <StatisticsTiles/>
            <LeaveBreakdown/>
            <UpcomingLeave/>
        </>
     );
}
 
export default Statistics;