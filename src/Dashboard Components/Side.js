import {Sidebar, SidebarHeader, SidebarBody, SidebarLogo, MenuBar, MenuItem, SubMenuBar} from "react-sidebar-pro";
import Logo from '../assets/images/Logo.png'
import { FaHome, FaCalendarAlt, FaCalendarPlus, FaRegCalendarAlt, FaUserPlus, FaUser , FaUsers,FaTable     } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import '../assets/css/sidebar.css'

const Side = ({sidebarOpen}) => 
{
    const links={
        dashboard: '/dashboard/statistics',
        leaveForm: '/dashboard/leave-form',
        leaveHistory: '/dashboard/leave-history',
        pendingRequests: '/dashboard/pending',
        allRequests: '/dashboard/all',
        newEmployee: '/dashboard/new-employee',
        viewEmployees: '/dashboard/view-employees'
    }
    console.log(links)
    return ( 
        <>
            <Sidebar className={`sidebar_custom ${sidebarOpen ? "sidebar-open": ''}`}>
                <SidebarHeader>
                    <SidebarLogo img={Logo}/>
                </SidebarHeader>
                <SidebarBody>
                    <MenuBar>
                        <MenuItem to='/dashboard/statistics' text='Dashboard' leftIcon={<FaHome/>}/>
                        <SubMenuBar label="Leave" labelLeftIcon={<FaCalendarAlt/>}>
                            <MenuItem to='/dashboard/leave-form' text='Apply Leave' leftIcon={<FaCalendarPlus/>}/>
                            <MenuItem to='/dashboard/leave-history' text='Leave History' leftIcon={<FaRegCalendarAlt/>}/>
                        </SubMenuBar>
                        <SubMenuBar label="Employee Requests" labelLeftIcon={<MdOutlinePendingActions/>}>
                            <MenuItem to='/dashboard/pending' text='Pending Requests' leftIcon={<MdOutlinePendingActions/>}/>
                            <MenuItem to='/dashboard/all' text='All Requests' leftIcon={<FaTable />}/>
                        </SubMenuBar>
                        <SubMenuBar label="Employees" labelLeftIcon={<FaUser/>}>
                            <MenuItem to='/dashboard/new-employee' text='New Employee' leftIcon={<FaUserPlus/>}/>
                            <MenuItem to='/dashboard/view-employees' text='All Employees' leftIcon={<FaUsers/>}/>
                        </SubMenuBar>
                    </MenuBar>
                </SidebarBody>
            </Sidebar>
        </>
     );
}
 
export default Side;