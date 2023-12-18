import LeaveForm from '../components/Leave Form/Leave Form'
import  '../assets/css/accordion.css'

const Leave = () => 
{
    return ( 
        <>
            <div className={`accordion `} id="leave-form-accordion">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#leave-form" aria-expanded="false" aria-controls="leave-form">Apply Leave</button>
                </h2>
                <div id="leave-form" className="accordion-collapse collapse" data-bs-parent="#leave-form-accordion">
                    <div className="accordion-body">
                        <LeaveForm/>
                    </div>
                </div>
                </div>
            </div>
        </>
     );
}
 
export default Leave;