import {useEffect, useState} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from '../Dashboard Components/Navbar/Navbar'
import Sidebar from '../Dashboard Components/Sidebar/Sidebar'
import Dashboard from './Pages/Dashboard'
import { toast } from 'react-toastify'

const DashboardLayout = () => 
{
    const navigate=useNavigate()

    const [full_name, setFullName]=useState("")
    const [leaveDays, setLeaveDays]=useState()
    const [role, setRole]=useState("")
    const [sidebarOpen, setSidebarOpen]=useState(false)

    useEffect(()=>
    {
        fetch("/home")
        .then(response => response.json())
        .then(data => 
        {
            if(data.success)
            {
                setRole(data.role)
                setFullName(data.full_name);
                setLeaveDays(data.leave_days)
            }
            else
            {
                navigate("/login")
                toast.error(data.error,
                    {
                        position: "top-right",
                        toastId: "auth",
                        className: "toast-message"
                    })
            }
        })
    },[navigate])

    return(
        <>
            {
                full_name
                ?
                    <>
                        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
                        <Sidebar role={role} sidebarOpen={sidebarOpen}/>
                        {/* <Routes>
                            <Route exact path='/' element={<Dashboard full_name={full_name} leaveDays={leaveDays}/>}></Route>
                        </Routes> */}
                    </>
                :
                    null
            }
        </>
    )
}
 
export default DashboardLayout;
