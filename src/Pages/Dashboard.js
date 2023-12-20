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
    const mainContainerClick= () => sidebarOpen && setSidebarOpen(false)

    return ( 
        <>
            <Navbar sidebarStatusFunction={sidebarStatusFunction} sidebarOpen={sidebarOpen}/>
            <Sidebar sidebarOpen={sidebarOpen} sidebarStatusFunction={sidebarStatusFunction}/>
            <main className={DashboardStyling.mainContainer} onClick={mainContainerClick}>
                <LeaveForm/>
                <NewEmployee/>
            </main>
        </>
     );
}
 
export default Dashboard;