import { NavLink } from "react-router-dom";
import '../assets/css/Login.css'
const Login = () => 
{
    return ( 
        <>
            <div className="d-flex justify-content-end mt-5">
                <form action="" className="row g-4 m-5">
                    <h1 className="my-3">Login Form</h1>
                    <div className="col-md-12">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="email" className="form-control mt-3" id="username" placeholder="Enter your username"/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control mt-3" id="password" placeholder="Enter your password"/>
                    </div>
                    <div classNameName="container buttons">
                        <button type="submit" className="btn btn-success text-center col-12 my-3">Login</button>
                        <NavLink to="/" className="col-12 btn btn-danger my-3">Back</NavLink>
                    </div>
                </form> 
            </div>
        </>
     );
}
 
export default Login;