import { NavLink } from "react-router-dom";
import styles from './navbar.module.css'
const Navbar = () => 
{
    return (  
        <nav className={`nav d-flex justify-content-end bg-dark ${styles.navbar}`}>
            <NavLink to="/profile" className={styles.link}>Profile</NavLink>
            <NavLink to="/new-employee" className={styles.link}>New Employee</NavLink>
            <NavLink to="/login" className={styles.link}>Sign Out</NavLink>
        </nav>
    );
}
 
export default Navbar;