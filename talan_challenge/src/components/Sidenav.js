import React, { useState } from "react";
import '../styles/components/Sidenav.css'
//react pro sidebar components
import {
ProSidebar,
Menu,
MenuItem,
SidebarHeader,
SidebarFooter,
SidebarContent,
} from "react-pro-sidebar";
//icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { SiApacheairflow } from "react-icons/si";
import { GiAbstract050 } from "react-icons/gi";
//sidebar css from react-pro-sidebar module
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
const Sidenav = () => {
//menuCollapse state using useState hook
const [menuCollapse, setMenuCollapse] = useState(false)
//custom function that will change menucollapse state from false to true and true to false
const menuIconClick = () => {
//condition checking to change state from true to false and vice versa
menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);

};
return (
<>
<div id="header">
{/* collapsed props to change menu size using menucollapse state */}
<ProSidebar collapsed={menuCollapse}>
<SidebarHeader>
<div className="logotext">
{/* Icon change using menucollapse state */}
<p>{menuCollapse ? <GiAbstract050 /> : <SiApacheairflow /> }</p>
</div>
<div className="closemenu" onClick={menuIconClick}>
{/* changing menu collapse icon on click */}
{menuCollapse ? (
<FiArrowRightCircle/>
) : (
<FiArrowLeftCircle/>
)}
</div>
</SidebarHeader>
<SidebarContent>
<Menu iconShape="square">
<MenuItem active={true} icon={<FiHome />}>
<Link to="/">Profile</Link>
</MenuItem>
<MenuItem icon={<FaList />}><Link to="/parcours">Parcours</Link></MenuItem>
<MenuItem icon={<FaRegHeart />}><Link to="/competences">Competences</Link></MenuItem>
<MenuItem icon={<RiPencilLine />}><Link to="/motivation">Motivation</Link></MenuItem>

</Menu>
</SidebarContent>
<SidebarFooter>
<Menu iconShape="square">
<MenuItem icon={<FiLogOut />}><Link to="/contact">Contact</Link></MenuItem>
</Menu>
</SidebarFooter>
</ProSidebar>
</div>
</>
);
}
export default Sidenav