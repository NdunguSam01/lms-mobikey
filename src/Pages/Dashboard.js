import Navbar from '../components/Navbar'
import Sidebar from '../components/Side';
import { useState } from 'react';
import Leave from './Leave';
import Employees from './Employees';

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
            <div className="content-contaiiner">
                <Leave/>
                <Employees/>
            </div>
        </>
     );
}
 
export default Dashboard;