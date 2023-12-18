import NewEmployee from '../components/New Employee'
import '../assets/css/accordion.css'

const Employees = () => 
{
    return ( 
        <>
            <div className={`accordion `} id="new-employee-accordion">
            <div className="accordion-item">
                <h2 className={`accordion-header`}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#new-employee" aria-expanded="false" aria-controls="new-employee">New Employee</button>
                </h2>
                <div id="new-employee" className="accordion-collapse collapse" data-bs-parent="#new-employee-accordion">
                    <div className="accordion-body">
                        <NewEmployee/>
                    </div>
                </div>
                </div>
            </div>
        </>
     );
}
 
export default Employees;