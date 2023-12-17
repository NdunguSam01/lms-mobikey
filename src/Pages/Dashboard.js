import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Side';
import { useState } from 'react';

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
        </>
     );
}
 
export default Dashboard;