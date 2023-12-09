import { NavLink } from "react-router-dom";
import MANImage from '../../assets/images/Logo.png'
import BackgroundStyling from '../Landing Page/landing.module.css'
import FormStyling from './login.module.css'
const Login = () => 
{
    return ( 
        <>
            <div className={`${FormStyling.parentFlex} ${BackgroundStyling.background}`}>
                <form action="" className={`row g-4 mx-4 bg-light ${FormStyling.form}`}>
                    <img src={MANImage} alt="MAN Logo" className={FormStyling.image}/>
                    <h1 className={`my-2 text-center text-uppercase ${FormStyling.h1}`}>Login Form</h1>
                    <div className="col-md-12 mt-3">
                        <label htmlFor="username" className="form-label fs-5">Username</label>
                        <input type="text" className="form-control mt-2" id="username" placeholder="Enter your username" required/>
                    </div>
                    <div className="col-md-12 mt-3">
                        <label htmlFor="password" className="form-label fs-5">Password</label>
                        <input type="password" className="form-control mt-2" id="password" placeholder="Enter your password" required/>
                    </div>
                    <div className="container buttons">
                        <button type="submit" className="btn btn-success text-center col-12 mt-4">Login</button>
                        <NavLink to="/" className="col-12 btn btn-danger mt-4 mb-4">Back</NavLink>
                    </div>
                </form> 
            </div>
        </>
     );
}
 
export default Login;