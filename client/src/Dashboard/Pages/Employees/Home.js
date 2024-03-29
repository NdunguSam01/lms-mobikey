import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import TableData from './All Employees/Table Data';
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion'

import './All Employees/Employees.css'
import EmployeeForm from './New Employee/Employee Form';

const Employees = () => 
{
    const [employeeData, setEmployeeData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isAccordionOpen, setAccordionOpen]=useState(true)
    const dataPerPage = 10;

    const lastEmployeeIndex = currentPage * dataPerPage;
    const firstEmployeeIndex = lastEmployeeIndex - dataPerPage;

    const currentEmployees = employeeData.slice(firstEmployeeIndex, lastEmployeeIndex);

    const navigate = useNavigate();

    useEffect(() => 
    {
        fetch("/employees-data")
            .then(response => response.json())
            .then(data =>
                {
                data.success
                ?
                    setEmployeeData((data.employee_data).reverse())
                :
                    navigate(-1);
                    toast.error(data.error, 
                    {
                        position: "top-right",
                        toastId: "employee-page-error",
                        autoClose: 2000
                    });
                })
    }, [navigate]);

    if(!employeeData)
    {
        return <div>Fetching employee data...</div>
    }
    const employeeDataMap = currentEmployees.map(employee => (
        <TableData key={employee.id} employee={employee} />
    ));

    const totalPages = Math.ceil(employeeData.length / dataPerPage);

    const updateEmployeeData=data =>
    {
        let updatedData=[...employeeData]
        updatedData.unshift(data)
        setEmployeeData(updatedData)
        setAccordionOpen(!isAccordionOpen)
    }

    return (
        <>
            <Accordion className='mt-3'>
                <Accordion.Item eventKey={isAccordionOpen ? "1" : "0"}>
                    <Accordion.Header>Create a new employee</Accordion.Header>
                    <Accordion.Body>
                        <EmployeeForm updateEmployeeData={updateEmployeeData}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <table className="table table-striped table-bordered mt-3">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Department</th>
                        <th scope="col">Position</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.length === 0 ? (
                        <tr>
                            <td colSpan={6} className='fs-5 p-2'>No employee data could be fetched</td>
                        </tr>
                    ) : (
                        employeeDataMap
                    )}
                </tbody>
            </table>
            <div className="d-flex justify-content-center">
                <Pagination>
                    <Pagination.First onClick={() => setCurrentPage(1)} title='First Page'/>
                    <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} title='Previous'/>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => setCurrentPage(i + 1)} className={i + 1 === currentPage ? 'active-page' : ''}>
                            {i + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} title='Next'/>
                    <Pagination.Last onClick={() => setCurrentPage(totalPages)} title='Last Page'/>
                </Pagination>
            </div>
        </>
    );
};

export default Employees;
