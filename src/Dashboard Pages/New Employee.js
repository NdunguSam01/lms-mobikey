import { useState } from "react";

const NewEmployee = () => 
{
    const d=new Date()
    const currentYear=d.getFullYear()
    const month=d.getMonth() + 1
    const date=d.getDate()

    let minDateRange=`${currentYear}-${month}-${date}`
    const maxDateRange=currentYear + "-12-31"

    const [employeeFormData, setEmployeeFormData]=useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            department: "",
            section: "",
            position: "",
            startDate: "",
            role:""
        })

        const handleInputChange= e =>
        {
            const key=e.target.id
            const value=e.target.value
    
            setEmployeeFormData(
                {
                    ...employeeFormData,
                    [key]: value
                })
        }

    return ( 
        <>
            <form action="" className="row g-3 mx-2 mt-1">
                <h1 className="text-center text-uppercase">New Employee</h1>
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label fs-5">First Name</label>
                    <input type="text"id="firstName" className="form-control fs-6" placeholder="First Name" value={employeeFormData.firstName} onChange={handleInputChange} required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label fs-5">Last Name</label>
                    <input type="text" id="lastName" className="form-control fs-6" placeholder="Last Name" value={employeeFormData.lastName} onChange={handleInputChange} required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label fs-5">Email address</label>
                    <input type="email" id="email" className="form-control fs-6" placeholder="Email address" value={employeeFormData.email} onChange={handleInputChange} required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="department" className="form-label fs-5">Department</label>
                    <select id="department" className="form-select fs-6" value={employeeFormData.department} onChange={handleInputChange} required>
                        <option value="">Select Department</option>
                        <option value="After Sales">After Sales</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Finance">Finance</option>
                        <option value="Logistics">Logistics</option>
                        <option value="Sales">Sales</option>
                        <option value="Warehouse">Warehouse</option>
                        <option value="Workshop">Workshop</option>  
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="section" className="form-label fs-5">Section</label>
                    <select id="section" className="form-select fs-6" value={employeeFormData.section} onChange={handleInputChange}>
                        <option value="">Select Section</option>
                        <option value="Mobikey">Mobikey</option>
                        <option value="JAP/OOTB">JAP Assembler</option>
                        <option value="JAP/OOTB">Out Of The Box</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="position" className="form-label fs-5">Position</label>
                    <input type="text" id="position" className="form-control fs-6" placeholder="Position" value={employeeFormData.position} onChange={handleInputChange} required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="startDate" className="form-label fs-5">Employment Date</label>
                    <input type="date" id="startDate" className="form-control fs-6" value={employeeFormData.startDate} onChange={handleInputChange} min={minDateRange} max={maxDateRange}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="role" className="form-label fs-5">Role</label>
                    <select id="role" className="form-select fs-6" value={employeeFormData.role} onChange={handleInputChange}>
                        <option value="">Select Role</option>
                        <option value="User">User</option>
                        <option value="HOD">Head of Department</option>
                        <option value="HR">Human Resource Manager</option>
                        <option value="GM">General Manager</option>
                    </select>
                </div>
                <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-success mt-2 fs-6">Add employee</button>
                </div>
            </form>
        </>
     );
}
 
export default NewEmployee;