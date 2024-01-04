import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({SideLink}) => 
{
    const [dropdownOpen, setDropdownOpen]=useState(false)

    if(SideLink.children)
    {
        return(
            <li>
                <div className="link-option" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    {SideLink.icon && <i className={SideLink.icon}></i>}
                    <h3>{SideLink.title}</h3>
                    <i className={`${dropdownOpen? "fa fa-angle-up" : "fa fa-angle-down"} toggle-btn`}></i>
                </div>
                <ul className={dropdownOpen ? "dropdown-content-open sidebar-list" : "dropdown-content"}>
                    {SideLink.children.map((child, index) => <SidebarItem key={index} SideLink={child} />) }
                </ul>
            </li>
        )
    }
    else
    {
        return(
            <li>
                <Link to={SideLink.path} className="side-link">
                    <div className="link-option">
                        <i className={`side-icon ${SideLink.icon}`}></i>
                        <h3>{SideLink.title}</h3>
                    </div>
                </Link>
            </li>
        )
    }
}
 
export default SidebarItem;