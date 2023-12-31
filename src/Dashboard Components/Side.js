import {Sidebar, SidebarHeader, SidebarBody, SidebarLogo, MenuBar, MenuItem, SubMenuBar} from "react-sidebar-pro";
import Logo from '../assets/images/Logo.png'
import { FaHome, FaCalendarAlt, FaCalendarPlus, FaRegCalendarAlt, FaUserPlus, FaUser , FaUsers,FaTable     } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import '../assets/css/sidebar.css'
import { Link } from "react-router-dom";

const Side = ({sidebarOpen}) => 
{
    const links={
        dashboard: <Link to='/dashboard/statistics'/>,
        leaveForm: <Link to='/dashboard/leave-form'/>,
        leaveHistory: <Link to='/dashboard/leave-history'/>,
        pendingRequests: <Link to='/dashboard/pending'/>,
        allRequests: <Link to='/dashboard/all'/>,
        newEmployee: <Link to='/dashboard/new-employee'/>,
        viewEmployees: <Link to='/dashboard/view-employees'/>
    }
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
                            <MenuItem to={links.leaveForm.props.to} text='Apply Leave' leftIcon={<FaCalendarPlus/>}/>
                            <MenuItem to={links.leaveHistory.props.to} text='Leave History' leftIcon={<FaRegCalendarAlt/>}/>
                        </SubMenuBar>
                        <SubMenuBar label="Employee Requests" labelLeftIcon={<MdOutlinePendingActions/>}>
                            <MenuItem to={links.pendingRequests.props.to} text='Pending Requests' leftIcon={<MdOutlinePendingActions/>}/>
                            <MenuItem to={links.allRequests.props.to} text='All Requests' leftIcon={<FaTable />}/>
                        </SubMenuBar>
                        <SubMenuBar label="Employees" labelLeftIcon={<FaUser/>}>
                            <MenuItem to={links.newEmployee.props.to} text='New Employee' leftIcon={<FaUserPlus/>}/>
                            <MenuItem to={links.viewEmployees.props.to} text='All Employees' leftIcon={<FaUsers/>}/>
                        </SubMenuBar>
                    </MenuBar>
                </SidebarBody>
            </Sidebar>
        </>
     );
}
 
export default Side;