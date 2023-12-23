import { NavLink } from "react-router-dom";
import BackgroundStyling from '../assets/css/landing.module.css'
import FormStyling from '../assets/css/login.module.css'
import MANImage from '../assets/images/Logo.png'


const ForgotPassword = () => 
{
    return ( 
        <>
            <div className={`${FormStyling.parentFlex} ${BackgroundStyling.background}`}>
                <form className={`row g-4 mx-4 bg-light ${FormStyling.form}`}>
                    <img src={MANImage} alt="MAN Logo" className={FormStyling.image}/>
                    <h1 className={`my-4 text-center text-uppercase ${FormStyling.h1}`}>Password Reset</h1>
                    <div className="col-md-12 mt-3">
                        <label htmlFor="email" className="form-label fs-6">Enter email address</label>
                        <input type="email" name="email" id="email" className="form-control mt-2" placeholder="Enter your email address"/>
                    </div>
                    <div className="container mt-4">
                        <button type="submit" className="btn btn-success col-12 mb-3">Generate password reset token</button>
                        <NavLink to="/login" className="col-12 btn btn-danger mb-3">Back to login</NavLink>
                    </div>
                </form> 
            </div>
        </>
     );
}
 
export default ForgotPassword;