import SideStyles from '../assets/css/sidebar.module.css'
// import DropdownStyles from '../assets/css/sidedropdowns.module.css'
import Logo from '../assets/images/Logo.png'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = ({sidebarOpen}) => 
{
    const [leaveDropdown, setLeaveDropdown]=useState(false)
    const [employeeDropdown, setEmployeeDropdown]=useState(false)

    const toggleLeaveDropdown= () =>
    {
        setLeaveDropdown(!leaveDropdown)
    } 
    const toggleEmployeeeDropdown= () =>
    {
        setEmployeeDropdown(!employeeDropdown)
    }   
    return(
        <>
            <aside className={`${SideStyles.sideSection} ${sidebarOpen ? `${SideStyles.open}` : ''}`}>
                <img src={Logo} alt='Mobikey Logo' className={`bg-light ${SideStyles.image}`}/>
                <ul className={SideStyles.sidebarList}>
                    <li>
                        <NavLink to="/dashboard" className={SideStyles.navLink}>
                            <div className={SideStyles.sideOption}>
                                <i className={`fa fa-home ${SideStyles.sideIcons}`}></i>
                                <h3 className={SideStyles.h3}>Dashboard</h3>
                            </div>
                        </NavLink>
                    </li>
                    <li className={`dropdown ${SideStyles.dropdown}`}>
                        <NavLink to="#" onClick={toggleLeaveDropdown} className={SideStyles.navLink}>
                            <div className={SideStyles.sideOption}>
                                <i className={`fa fa-calendar ${SideStyles.sideIcons}`}></i>
                                <h3 className={SideStyles.h3}>Leave</h3>
                                {leaveDropdown 
                                    ? 
                                        (<i className={`fa fa-angle-down ${SideStyles.sideIcons} ${SideStyles.dropdownIcon}`}></i>)
                                    : 
                                        (<i className={`fa fa-angle-right ${SideStyles.sideIcons} ${SideStyles.dropdownIcon}`}></i>) 
                                }
                            </div>
                        </NavLink>
                        {leaveDropdown && (
                            <ul className={`dropdown-content ${SideStyles.dropdownContent} ${SideStyles.sidebarList}`}>
                                <li>
                                    <NavLink to="/leave-form" className={SideStyles.navLink}>
                                        <div className={SideStyles.sideOption}>
                                            <i className={`fa fa-calendar-plus-o ${SideStyles.sideIcons}`}></i>
                                            <h3 className={SideStyles.h3}>Apply Leave</h3>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/leave-history" className={SideStyles.navLink}>
                                        <div className={SideStyles.sideOption}>
                                            <i className={`fa fa-history ${SideStyles.sideIcons}`}></i>
                                            <h3 className={SideStyles.h3}>Leave History</h3>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <NavLink to="/pending" className={SideStyles.navLink}>
                            <div className={SideStyles.sideOption}>
                                <i className={`fa fa-clock-o ${SideStyles.sideIcons}`}></i>
                                <h3 className={SideStyles.h3}>Employee Requests</h3>
                            </div>
                        </NavLink>
                    </li>
                    <li className="dropdown">
                        <NavLink to="#" onClick={toggleEmployeeeDropdown} className={SideStyles.navLink}>
                            <div className={SideStyles.sideOption}>
                                <i className={`fa fa-user ${SideStyles.sideIcons}`}></i>
                                <h3 className={SideStyles.h3}>Employees</h3>
                                {employeeDropdown 
                                    ? 
                                        (<i className={`fa fa-angle-down ${SideStyles.sideIcons} ${SideStyles.dropdownIcon}`}></i>) 
                                    : 
                                        (<i className={`fa fa-angle-right ${SideStyles.sideIcons} ${SideStyles.dropdownIcon}`}></i>) 
                                }
                            </div>
                        </NavLink>
                        {employeeDropdown && (
                            <ul className={`dropdown-content ${SideStyles.dropdownContent} ${SideStyles.sidebarList}`}>
                                <li>
                                    <NavLink to="/new employee" className={SideStyles.navLink}>
                                        <div className={SideStyles.sideOption}>
                                            <i className={`fa fa-user-plus ${SideStyles.sideIcons}`}></i>
                                            <h3 className={SideStyles.h3}>New Employee</h3>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/view employees" className={SideStyles.navLink}>
                                        <div className={SideStyles.sideOption}>
                                            <i className={`fa fa-users ${SideStyles.sideIcons}`}></i>
                                            <h3 className={SideStyles.h3}>View Employees</h3>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </aside>
        </>
    )
}
 
export default Sidebar;