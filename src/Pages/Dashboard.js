import Navbar from '../components/Navbar'
import Sidebar from '../components/Side';
import { useState } from 'react';
import LeaveForm from '../components/Leave Form'
import NewEmployee from '../components/New Employee'
import DashboardStyling from '../assets/css/dashboard.module.css'

const Dashboard = () => 
{
    const [sidebarOpen, setSidebarOpen]=useState(false)

    const sidebarStatusFunction= () =>
    {
        setSidebarOpen(!sidebarOpen)
    }
    return ( 
        <>
            <Navbar sidebarStatusFunction={sidebarStatusFunction} sidebarOpen={sidebarOpen}/>
            <Sidebar sidebarOpen={sidebarOpen} sidebarStatusFunction={sidebarStatusFunction}/>
            <div className={DashboardStyling.mainContainer}>
                <LeaveForm/>
                <NewEmployee/>
            </div>
        </>
     );
}
 
export default Dashboard;