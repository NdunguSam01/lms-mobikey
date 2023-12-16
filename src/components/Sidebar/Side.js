import SideStyles from './side.module.css'
import Logo from '../../assets/images/Logo.png'
import { NavLink } from 'react-router-dom';

const Sidebar = () => 
{
    return ( 
        <aside className={`bg-dark ${SideStyles.sideSection}`}>
            <img src={Logo} alt='Mobikey Logo' className={`bg-light ${SideStyles.image}`}/>
            <NavLink to="/dashboard" className={SideStyles.navLink}>
                <div className={SideStyles.sideOption}>
                    <i className={`fa fa-home ${SideStyles.sideIcons}`}></i>
                    <h3 className={SideStyles.h3}>Dashboard</h3>
                </div>
            </NavLink>
            <NavLink to="/leave" className={SideStyles.navLink}>
                <div className={SideStyles.sideOption}>
                    <i className={`fa fa-calendar ${SideStyles.sideIcons}`}></i>
                    <h3 className={SideStyles.h3}>Leave</h3>
                </div>
            </NavLink>
            <NavLink to="/requests" className={SideStyles.navLink}>
                <div className={SideStyles.sideOption}>
                    <i className={`fa fa-clock-o ${SideStyles.sideIcons}`}></i>
                    <h3 className={SideStyles.h3}>Employee Requests</h3>
                </div>
            </NavLink>
            <NavLink to="/employees" className={SideStyles.navLink}>
                <div className={SideStyles.sideOption}>
                    <i className={`fa fa-user ${SideStyles.sideIcons}`}></i>
                    <h3 className={SideStyles.h3}>Employees</h3>
                </div>
            </NavLink>
            
        </aside>
     );
}
 
export default Sidebar;