import { NavLink } from "react-router-dom";
import styles from '../assets/css/navbar.module.css'

const Navbar = ({openSidebar, sidebarOpen}) => 
{
    return (  
        <>
            <nav className={styles.navbar}>
                {
                sidebarOpen ? 
                    <i className={`fa fa-close ${styles.icon}`} onClick={openSidebar}></i> 
                    :
                    <i className={`fa fa-bars ${styles.icon}`} onClick={openSidebar}></i>
                }
                <span className={styles.navLinks}>
                    <NavLink to="/profile" className={styles.link}>Profile</NavLink>
                    <NavLink to="/login" className={styles.link}>Sign Out</NavLink>
                </span>
            </nav>
        </>
    );
}
 
export default Navbar;