const Profile = () => 
{
    return ( 
        <>
            <section className="row g-2">
                <h2 className="text-uppercase">General information</h2>
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label fs-6">First Name</label>
                    <input type="text" name="firstName" className="form-control fs-6" readOnly/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label fs-6">Last Name</label>
                    <input type="text" name="lastName" id="lastName" className="form-control fs-6" readOnly/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label fs-6">Email address</label>
                    <input type="text" name="email" id="email" className="form-control fs-6" readOnly/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="department" className="form-label fs-6">Department</label>
                    <input type="text" name="department" id="department" className="form-control fs-6" readOnly/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="section" className="form-label fs-6">Section</label>
                    <input type="text" name="section" id="section" className="form-control fs-6" readOnly/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="position" className="form-label fs-6">Position</label>
                    <input type="text" name="position" id="position" className="form-control fs-6" readOnly/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="employmentDate" className="form-label fs-6">Hired Date</label>
                    <input type="text" name="employmentDate" id="employmentDate" className="form-control fs-6" readOnly/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="role" className="form-label fs-6">Role</label>
                    <input type="text" name="role" id="role" className="form-control fs-6" readOnly/>
                </div>
            </section>
            <form action="" className="row g-2 mt-2">
                <h2 className="text-uppercase">Change Password</h2>
                <div className="col-md-4">
                    <label htmlFor="currentPassword" className="form-label fs-6">Current password</label>
                    <input type="password" name="currentPassword" id="" className="form-control fs-6" placeholder="Enter your current password" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="newPassword" className="form-label fs-6">New password</label>
                    <input type="password" name="newPassword" className="form-control fs-6" placeholder="New password" required/>
                </div>
                <div className="col-md-4">
                <label htmlFor="confirmPassword" className="form-label fs-6">Confirm new password</label>
                    <input type="password" name="confirmPassword" className="form-control fs-6" placeholder="Confirm new password" required/>
                </div>
                <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-success mt-2 fs-6">Change password</button>
                </div>
            </form>
        </>
     );
}
 
export default Profile;