import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Side';
import { useState } from 'react';
import Leave from './Leave';

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
            <div className="conttent-contaiiner">
                <Leave/>
            </div>
        </>
     );
}
 
export default Dashboard;