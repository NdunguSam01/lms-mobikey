import { NavLink, useNavigate } from "react-router-dom";
import MANImage from '../assets/images/Logo.png'
import BackgroundStyling from '../assets/css/landing.module.css'
import FormStyling from '../assets/css/login.module.css'
import { useState } from "react";

const Login = () => 
{
    const navigate=useNavigate()
    const [loginFormData, setLoginFormData]=useState(
        {
            username: "",
            password: ""
        })

    const handleInputChange= e =>
    {
        const key=e.target.id
        const value=e.target.value
    
        setLoginFormData(
            {
                ...loginFormData,
                [key]: value
            })
    }

    const handleLogin = e =>
    {
        e.preventDefault()
        setTimeout(()=>
        {
            navigate("/dashboard")
        },2000)
    }
    
    return ( 
        <>
            <div className={`${FormStyling.parentFlex} ${BackgroundStyling.background}`}>
                <form onSubmit={handleLogin} className={`row g-4 mx-4 bg-light ${FormStyling.form}`}>
                    <img src={MANImage} alt="MAN Logo" className={FormStyling.image}/>
                    <h1 className={`my-2 text-center text-uppercase ${FormStyling.h1}`}>sign in</h1>
                    <div className="col-md-12 mt-2">
                        <label htmlFor="username" className="form-label fs-5">Username</label>
                        <input type="text" className="form-control mt-2" id="username" placeholder="Enter your username" value={loginFormData.username} onChange={handleInputChange} required/>
                    </div>
                    <div className="col-md-12 mt-2">
                        <label htmlFor="password" className="form-label fs-5">Password</label>
                        <input type="password" className="form-control mt-2" id="password" placeholder="Enter your password" value={loginFormData.password} onChange={handleInputChange} required/>
                    </div>
                    <div className={FormStyling.childFlex}>
                        <button type="submit" className="btn btn-success text-center mt-1">Login</button>
                        <NavLink to="/" className="btn btn-danger mt-1 ms-5">Back</NavLink>
                    </div>
                    <div className="container">
                        <NavLink to="/forgot" className="col-12 btn btn-danger my-3">Forgot password?</NavLink>
                    </div>
                </form> 
            </div>
        </>
    );
}
 
export default Login;