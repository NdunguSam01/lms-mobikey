import SideStyles from '../assets/css/sidebar.module.css'
import Logo from '../assets/images/Logo.png'
import { NavLink } from 'react-router-dom';

const Sidebar = ({sidebarOpen}) => 
{
    
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
                    <li>
                        <NavLink to="/leave" className={SideStyles.navLink}>
                            <div className={SideStyles.sideOption}>
                                <i className={`fa fa-calendar ${SideStyles.sideIcons}`}></i>
                                <h3 className={SideStyles.h3}>Leave</h3>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pending" className={SideStyles.navLink}>
                            <div className={SideStyles.sideOption}>
                                <i className={`fa fa-clock-o ${SideStyles.sideIcons}`}></i>
                                <h3 className={SideStyles.h3}>Employee Requests</h3>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/employees" className={SideStyles.navLink}>
                            <div className={SideStyles.sideOption}>
                                <i className={`fa fa-user ${SideStyles.sideIcons}`}></i>
                                <h3 className={SideStyles.h3}>Employees</h3>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </>
    )
}
 
export default Sidebar;