import Navbar from '../components/Navbar'
import Sidebar from '../components/Side';
import LeaveForm from './Leave Form'
import LeaveHistory from './Leave History';
import PendingRequests from './Pending Requests'
import NewEmployee from './New Employee'
import ViewEmployees from './View Employees';
import DashboardStyling from '../assets/css/dashboard.module.css'
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
            </main>
        </>
     );
}
 
export default Dashboard;