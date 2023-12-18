import Navbar from '../components/Navbar'
import Sidebar from '../components/Side';
import { useState } from 'react';
import Leave from './Leave';
import Employees from './Employees';

const Dashboard = () => 
{
    const [sidebarOpen, setSidebarOpen]=useState(false)

    const openSidebar= () =>
    {
        setSidebarOpen(!sidebarOpen)
    }
    return ( 
        <>
            <Navbar openSidebar={openSidebar} sidebarOpen={sidebarOpen}/>
            <Sidebar sidebarOpen={sidebarOpen}/>
            <div className="content-contaiiner">
                <Leave/>
                <Employees/>
            </div>
        </>
     );
}
 
export default Dashboard;