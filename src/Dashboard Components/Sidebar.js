import SideLinks from '../Data/Sidebar Links.json'
import Logo from '../assets/images/Logo.png'
import SidebarItem from './Sidebar Item';
import '../assets/css/sidebar.css'

const Sidebar = ({sidebarOpen}) => 
{
    return ( 
        <>
            <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
                <img src={Logo} alt='Mobikey Logo'/>
                <ul className='sidebar-list'>
                    {SideLinks.map((SideLink, index) => <SidebarItem key={index} SideLink={SideLink} />)}
                </ul>
            </aside>
        </>
     );
}
 
export default Sidebar;