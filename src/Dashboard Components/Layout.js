import Navbar from './Navbar'
import Sidebar from './Sidebar'
import '../assets/css/table.css'
import DashboardStyling from '../assets/css/dashboard.module.css'
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => 
{
    const [sidebarOpen, setSidebarOpen]=useState(false)

    const sidebarStatusFunction= () =>setSidebarOpen(!sidebarOpen)

    const mainContainerClick= () => sidebarOpen && setSidebarOpen(false)

    const location=useLocation()

    useEffect(()=>
    {
        if(sidebarOpen === true) setSidebarOpen(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location])
    return ( 
        <>
            <Navbar sidebarStatusFunction={sidebarStatusFunction} sidebarOpen={sidebarOpen}/>
            <Sidebar sidebarOpen={sidebarOpen}/>
            <main className={DashboardStyling.mainContainer} onClick={mainContainerClick}>
                <Outlet/>
            </main>
        </>
     );
}
 
export default Layout;