import SideStyles from './side.module.css'
import Logo from '../../assets/images/Logo.png'

const Sidebar = () => 
{
    return ( 
        <aside className={SideStyles.sideSection}>
            <img src={Logo} alt='Mobikey Logo' className={`bg-light ${SideStyles.image}`}/>
            <div className={SideStyles.sideOption}>
                <i className={`fa fa-home ${SideStyles.sideIcons}`}></i>
                <h3>Dashboard</h3>
            </div>
            <div className={SideStyles.sideOption}>
                <i className={`fa fa-calendar ${SideStyles.sideIcons}`}></i>
                <h3>Leave</h3>
            </div>
            <div className={SideStyles.sideOption}>
                <i className={`fa fa-clock-o ${SideStyles.sideIcons}`}></i>
                <h3>Pending Requests</h3>
            </div>
            <div className={SideStyles.sideOption}>
                <i className={`fa fa-user ${SideStyles.sideIcons}`}></i>
                <h3>Employees</h3>
            </div>
        </aside>
     );
}
 
export default Sidebar;