import Styling from '../assets/css/tiles.module.css'

const StatisticsTiles = () => 
{
    return ( 
        <>
            <div className={Styling.tileCollection}>
                <div className={Styling.tile}>
                    <div className={Styling.text}>
                        <h3>2</h3>
                        <p>Total Requests</p>
                    </div>
                    <div className={Styling.icon}>
                        <i className="fa fa-history"></i>
                    </div>
                </div>
                <div className={Styling.tile}>
                    <div className={Styling.text}>
                        <h3>1</h3>
                        <p>Approved Requests</p>
                    </div>
                    <div className={Styling.icon}>
                        <i className="fa fa-calendar-check-o" style={{color: "green"}}></i>
                    </div>
                </div>
                <div className={Styling.tile}>
                    <div className={Styling.text}>
                        <h3>0</h3>
                        <p>Rejected Requests</p>
                    </div>
                    <div className={Styling.icon}>
                        <i className="fa fa-calendar-times-o" style={{color: "red"}}></i>
                    </div>
                </div>
                <div className={Styling.tile}>
                    <div className={Styling.text}>
                        <h3>1</h3>
                        <p>Pending Requests</p>
                    </div>
                    <div className={Styling.icon}>
                        <i className="fa fa-hourglass-half"></i>
                    </div>
                </div>
            </div>
            
        </>
     );
}
 
export default StatisticsTiles;