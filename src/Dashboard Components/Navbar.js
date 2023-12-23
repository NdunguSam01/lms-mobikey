import { Link } from "react-router-dom";
import styles from '../assets/css/navbar.module.css'

const Navbar = ({sidebarStatusFunction, sidebarOpen}) => 
{
    return (  
        <>
            <nav className={styles.navbar}>
                {
                sidebarOpen ? 
                    <i className={`fa fa-close ${styles.icon}`} onClick={sidebarStatusFunction}></i> 
                    :
                    <i className={`fa fa-bars ${styles.icon}`} onClick={sidebarStatusFunction}></i>
                }
                <span className={styles.navLinks}>
                    <Link to="/dashboard/profile" className={styles.link}>Profile</Link>
                    <Link to="/login" className={styles.link}>Sign Out</Link>
                </span>
            </nav>
        </>
    );
}
 
export default Navbar;