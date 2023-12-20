import ErrorImage from '../assets/images/Error.png'
import Styling from '../assets/css/404.module.css'
import { NavLink } from 'react-router-dom';
const PageNotFound = () => 
{
    return ( 
        <div className={Styling.errorMessage}>
            <img src={ErrorImage} alt="" />
            <h1>404- Page Not Found</h1>
            <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable</p>
            <NavLink to="/dashboard" className="btn btn-primary">Back to dashboard</NavLink>
        </div>
     );
}
 
export default PageNotFound;