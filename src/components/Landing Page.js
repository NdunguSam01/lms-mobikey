import { NavLink  } from 'react-router-dom';

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