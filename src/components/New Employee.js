import { NavLink } from "react-router-dom";

const NewEmployee = () => 
{
    return ( 
        <>
            <h1 className="text-center text-uppercase mt-5">New Employee</h1>
            <form action="" className="row g-4 m-5">
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text"id="firstName" className="form-control" placeholder="First Name" required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" id="lastName" className="form-control" placeholder="Last Name"  required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" id="email" className="form-control" placeholder="Email address" required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="department" className="form-label">Department</label>
                    <select id="department" className="form-select" required>
                        <option value="">Select Department</option>
                        <option value="Finance">Finance</option>
                        <option value="Logistics">Logistics</option>
                        <option value="Sales">Sales</option>
                        <option value="Workshop">Workshop</option>
                        <option value="After Sales">After Sales</option>
                        <option value="Warehouse">Warehouse</option>
                        <option value="Cleaning">Cleaning</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="section" className="form-label">Section</label>
                    <select id="section" className="form-select">
                        <option value="">Select Section</option>
                        <option value="Mobikey">Mobikey</option>
                        <option value="JAP/OOTB">JAP Assembler</option>
                        <option value="JAP/OOTB">Out Of The Box</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="position" className="form-label">Position</label>
                    <input type="text" id="position" className="form-control" placeholder="Position" required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="startDate" className="form-label">Start Date</label>
                    <input type="date" id="startDate" className="form-control" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="role" className="form-label">Role</label>
                    <select id="role" className="form-select">
                        <option value="">Select Role</option>
                        <option value="User">User</option>
                        <option value="HOD">Head of Department</option>
                        <option value="GM">General Manager</option>
                        <option value="HR">Human Resource Manager</option>
                    </select>
                </div>
                <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-success mt-4">Add employee</button>
                </div>
                <div className="col-md-12 text-center">
                    <NavLink to="/navbar" className="btn btn-danger">Cancel</NavLink>
                </div>
            </form>
        </>
     );
}
 
export default NewEmployee;