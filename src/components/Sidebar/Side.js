import SideStyles from './side.module.css'
import Logo from '../../assets/images/Logo.png'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => 
{
    const [isDropdownOpen, setDropdownOpen]=useState(false)

    const toggleDropdown= () =>
    {
        setDropdownOpen(!isDropdownOpen)
    }
    return ( 
        <aside className={`bg-dark ${SideStyles.sideSection}`}>
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
                <li className="dropdown">
                    <NavLink to="#" onClick={toggleDropdown} className={SideStyles.navLink}>
                        <div className={SideStyles.sideOption}>
                            <i className={`fa fa-calendar ${SideStyles.sideIcons}`}></i>
                            <h3 className={SideStyles.h3}>Leave</h3>
                            {isDropdownOpen ? (<i className={`fa fa-angle-down ${SideStyles.sideIcons}`} style={{marginLeft: "150px"}}></i>) : (<i className={`fa fa-angle-right ${SideStyles.sideIcons}`} style={{marginLeft: "150px"}}></i>) }
                        </div>
                    </NavLink>
                    {isDropdownOpen && (
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
                                        <h3 className={SideStyles.h3}>View Leave History</h3>
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
                    <NavLink to="#" onClick={toggleDropdown} className={SideStyles.navLink}>
                        <div className={SideStyles.sideOption}>
                            <i className={`fa fa-user ${SideStyles.sideIcons}`}></i>
                            <h3 className={SideStyles.h3}>Employees</h3>
                            {isDropdownOpen ? (<i className={`fa fa-angle-down ${SideStyles.sideIcons}`} style={{marginLeft: "100px"}}></i>) : (<i className={`fa fa-angle-right ${SideStyles.sideIcons}`} style={{marginLeft: "100px"}}></i>) }
                        </div>
                    </NavLink>
                    {isDropdownOpen && (
                        <ul className={`dropdown-content ${SideStyles.dropdownContent} ${SideStyles.sidebarList}`}>
                            <li>
                                <NavLink to="/new employee" className={SideStyles.navLink}>
                                    <div className={SideStyles.sideOption}>
                                        <i className={`fa fa-calendar-plus-o ${SideStyles.sideIcons}`}></i>
                                        <h3 className={SideStyles.h3}>New Employee</h3>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/view employees" className={SideStyles.navLink}>
                                    <div className={SideStyles.sideOption}>
                                        <i className={`fa fa-history ${SideStyles.sideIcons}`}></i>
                                        <h3 className={SideStyles.h3}>View Employees</h3>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </aside>
     );
}
 
export default Sidebar;