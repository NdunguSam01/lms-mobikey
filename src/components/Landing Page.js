import { NavLink  } from 'react-router-dom';
import '../assets/css/Landing Page.css'

const LandingPage = () => 
{
    return ( 
        <>
            <nav>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/leave">Leave Form</NavLink>
            </nav>
        </>

     );
}
 
export default LandingPage;