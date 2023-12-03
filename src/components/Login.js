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
                    <button type="submit" className="btn btn-success text-center col-11 mx-3 my-3">Login</button>
                    <div classNameName="buttons">
                        <NavLink to="/" className="col-5 btn btn-danger mx-3 my-3">Back</NavLink>
                        <NavLink to="/forgot" className="col-5 btn btn-danger ms-4 my-3">Forgot Password?</NavLink>
                    </div>
                </form> 
            </div>

            {/* <form action="">
                <h1>Login Form</h1>
                <div class="mb-3">
                    <label htmlFor="username" class="form-label">Username</label>
                    <input type="email" class="form-control" id="username" placeholder="Enter your username"/>
                </div>
                <div class="mb-3">
                    <label htmlFor="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter your password"></input>
                </div>
                <button type="submit" className="btn btn-success text-center">Login</button>
                <div className="buttons">
                    <NavLink to="/" className="col-5 btn btn-danger m-2">Back</NavLink>
                    <NavLink to="/forgot" className="col-5 btn btn-danger ms-5">Forgot Password?</NavLink>
                </div>
            </form> */}
            {/* <form>
                <h1>Login Form</h1>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Enter your username" required/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter your password"  required/> 
                <input type="submit" value="Login"/>
                <NavLink to="/" >Back</NavLink>
                <NavLink to="/forgot">Forgot Password?</NavLink>
            </form> */}
        </>
     );
}
 
export default Login;