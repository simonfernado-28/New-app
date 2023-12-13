import React, {useState} from "react";
import {
        FaTh,
        FaBars,
        FaUserAlt,
        FaBarcode,
        FaQrcode,
        FaDollarSign 
        } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


export default function Sidebar ({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const dynamicWidth = isOpen ? '150px' : '50px';
    const closeSidebar = () => {
        if (isOpen) {
          setIsOpen(false);
        }
      };
    const menuItem = [
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/barcode",
            name:"Barcode Generator",
            icon:<FaBarcode/>
        },
        {
            path:"/qrcode",
            name:"Qrcode Generator",
            icon:<FaQrcode/>
        },
        {
            path:"/fees-management",
            name:"Fee Management",
            icon:<FaDollarSign/>
        }
    ]
    return (
        <div className="container">
            <div style={{width: dynamicWidth}} className="sidebar">
                <div className="top_section">
                    <h4 style={{display: isOpen ? "block" : "none"}} className="logo">SIMON</h4>
                    <div style={{marginLeft: isOpen ? "40px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                   menuItem.map((item, index)=>(
                       <NavLink onClick={closeSidebar} to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
            </div>
            <main>{children}</main>
        </div>
    );
}