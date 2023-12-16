import { NavLink } from "react-router-dom";
import LinkStyles from './landing.module.css'

const LandingPage = () => 
{
    return (  
        <div className={`${LinkStyles.background}`}>
            <nav className={LinkStyles.navbar}>
                <NavLink to="/login" className={LinkStyles.navLink}>Login</NavLink>
            </nav>
            <div className={LinkStyles.message}>
                <h2>Mobikey Truck and Bus Limited</h2>
                <p>Official dealer of MAN trucks and busses</p>
            </div>
        </div>
    );
}
 
export default LandingPage;