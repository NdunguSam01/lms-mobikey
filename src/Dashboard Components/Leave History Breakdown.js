import { PieChart } from '@mui/x-charts/PieChart';
import  '../assets/css/statistics.css'

const LeaveBreakdown = () => 
{
    const values=
    {
        approved: 10,
        pending: 10,
        rejected: 10
    }
    const chartData=[
        { id: 0,value: values.approved,label: "Approved",color: "#4CAF50" },
        {id: 1,value: values.pending,label:"Pending", color: "#FFC107" },
        {id: 2,value: values.rejected, label:"Rejected",color: "#FF5722"}
    ]
    return ( 
        <div className="history">
            <h1>Leave History Breakdown</h1>
            <PieChart series={[{data: chartData,outerRadius: 100}]} width={400} height={200}/>
        </div>
     );
}
 
export default LeaveBreakdown;