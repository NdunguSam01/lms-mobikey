import Navbar from '../Dashboard components/Navbar'
import Sidebar from '../Dashboard components/Side';
import LeaveForm from './Leave Form'
import LeaveHistory from './Leave History';
import PendingRequests from './Pending Requests'
import Profile from './Profile';
import NewEmployee from './New Employee'
import ViewEmployees from './View Employees';
import DashboardStyling from '../assets/css/dashboard.module.css'
import '../assets/css/table.css'
import { useState } from 'react';

const Dashboard = () => 
{
    const [sidebarOpen, setSidebarOpen]=useState(false)

    const sidebarStatusFunction= () =>
    {
        setSidebarOpen(!sidebarOpen)
    }
    const mainContainerClick= () => sidebarOpen && setSidebarOpen(false)

    return ( 
        <>
            <Navbar sidebarStatusFunction={sidebarStatusFunction} sidebarOpen={sidebarOpen}/>
            <Sidebar sidebarOpen={sidebarOpen} sidebarStatusFunction={sidebarStatusFunction}/>
            <main className={DashboardStyling.mainContainer} onClick={mainContainerClick}>
                <LeaveForm/>
                <LeaveHistory/>
                <PendingRequests/>
                <NewEmployee/>
                <ViewEmployees/>
                <Profile/>
            </main>
        </>
     );
}
 
export default Dashboard;