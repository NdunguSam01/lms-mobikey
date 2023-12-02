const Login = () => 
{
    return ( 
        <>
            <h1>Leave Request Form</h1>
            <form >
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Enter your username" required/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter your password"  required/> 
                <input type="submit" class="btn btn-success" value="Login"/>
            </form>
        </>
     );
}
 
export default Login;