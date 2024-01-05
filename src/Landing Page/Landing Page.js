import { Link } from "react-router-dom";
import LinkStyles from '../assets/css/landing.module.css'

const LandingPage = () => 
{
    return (  
        <div className={`${LinkStyles.background}`}>
            <nav className={LinkStyles.navbar}>
                <Link to="/login" className={LinkStyles.navLink}>Login</Link>
            </nav>
            <div className={LinkStyles.flex}>
                <div className={LinkStyles.message}>
                    <h2>Mobikey Truck and Bus Limited</h2>
                    <p>Official dealer of MAN trucks and busses</p>
                </div>
            </div>
        </div>
    );
}
 
export default LandingPage;