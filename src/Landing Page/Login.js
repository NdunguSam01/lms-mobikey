import { Link, useNavigate } from "react-router-dom";
import MANImage from '../assets/images/Logo.png'
import BackgroundStyling from '../assets/css/landing.module.css'
import FormStyling from "../assets/css/login.module.css"
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import '../assets/css/toast.css'

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

        toast.success("Sign In successful",
        {
        position: toast.POSITION.TOP_RIGHT,
        })

        setTimeout(()=>
        {
            navigate("/dashboard")
        },2600)
    }
    return ( 
        <>
        
            <div className={`${FormStyling.parentFlex} ${BackgroundStyling.background}`}>
                <ToastContainer autoClose={2000} className="mx-1" pauseOnHover={false}/>
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
                        <Link to="/" className="btn btn-danger mt-1 ms-5">Back</Link>
                    </div>
                    <div className="container">
                        <Link to="/forgot" className="col-12 btn btn-danger my-3">Forgot password?</Link>
                    </div>
                </form> 
            </div>
        </>
    );
}
 
export default Login;