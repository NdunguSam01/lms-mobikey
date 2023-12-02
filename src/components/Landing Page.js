import { NavLink  } from 'react-router-dom';
import '../assets/css/Landing Page.css'

const LandingPage = () => 
{
    return ( 
        <>
            <nav>
                <NavLink to="/login">Login</NavLink>
            </nav>
        </>

     );
}
 
export default LandingPage;