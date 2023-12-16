import SideStyles from './side.module.css'
import Logo from '../../assets/images/Logo.png'
import { NavLink } from 'react-router-dom';

const Sidebar = () => 
{
    return ( 
        <aside className={`bg-dark ${SideStyles.sideSection}`}>
            <img src={Logo} alt='Mobikey Logo' className={`bg-light ${SideStyles.image}`}/>
            <div className={SideStyles.sideOption}>
                <i className={`fa fa-home ${SideStyles.sideIcons}`}></i>
                <NavLink to="/dashboad" className={SideStyles.navLink}>Dashboard</NavLink>
            </div>
            <div className={SideStyles.sideOption}>
                <i className={`fa fa-calendar ${SideStyles.sideIcons}`}></i>
                <NavLink to="/leave" className={SideStyles.navLink}>Leave</NavLink>
            </div>
            <div className={SideStyles.sideOption}>
                <i className={`fa fa-clock-o ${SideStyles.sideIcons}`}></i>
                <NavLink to="/pending" className={SideStyles.navLink}>Pending Request</NavLink>
            </div>
            <div className={SideStyles.sideOption}>
                <i className={`fa fa-user ${SideStyles.sideIcons}`}></i>
                <NavLink to="/users" className={SideStyles.navLink}>Employees</NavLink>
            </div>
        </aside>
     );
}
 
export default Sidebar;