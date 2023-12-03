import { NavLink } from "react-router-dom";
const Navbar = () => 
{
    return (  
        <nav>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/login">Sign Out</NavLink>
        </nav>
    );
}
 
export default Navbar;