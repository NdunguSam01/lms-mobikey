import ErrorImage from '../assets/images/Error.png'
import Styling from '../assets/css/error.module.css'
import { useNavigate  } from 'react-router-dom';
const PageNotFound = () => 
{
    const navigate=useNavigate()

    return ( 
        <div className={Styling.errorMessage}>
            <img src={ErrorImage} alt="" />
            <h1>404- Page Not Found</h1>
            <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable</p>
            <button className="btn btn-primary" onClick={() => navigate(-1)}>Go back</button>
        </div>
     );
}
 
export default PageNotFound;