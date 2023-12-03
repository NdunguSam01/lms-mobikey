import { NavLink } from "react-router-dom";
import '../assets/css/Login.css'
const Login = () => 
{
    return ( 
        <>
            <div className="d-flex justify-content-end">
                <form action="">
                    <h1 className="my-4">Login Form</h1>
                    <div className="form-floating my-4 mx-3">
                        <input type="email" className="form-control" id="username" placeholder="Enter your username"/>
                        <label htmlFor="username" className="form-label">Username</label>
                    </div>
                    <div className="form-floating my-4 mx-3">
                        <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
                        <label htmlFor="password" className="form-label">Password</label>
                    </div>
                    <div classNameName="buttons">
                        <button type="submit" className="btn btn-success text-center col-11 mx-3 my-3">Login</button>
                        <NavLink to="/" className="col-11 btn btn-danger mx-3 my-3">Back</NavLink>
                    </div>
                </form> 
            </div>
        </>
     );
}
 
export default Login;