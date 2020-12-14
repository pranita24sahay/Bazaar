import React from 'react';
import SideBarButton from '../sidebar/sidebarbutton';
import './Toolbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo , faAddressCard,  faHome } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../Images/logo2.jpg';



function Toolbar(prop) {
    return (
        <header className="toolbar">

            <nav className="toolbar_navigation ">
                <div className="button1">
                    <SideBarButton click={prop.sidebarClickHandler} />
                </div>
                <div className="toolbar_logo"><a href="/"><img src={Logo} width="35px" height="35px"/> Let's Buy</a> </div>
                <div className="spacer" />
                <div className="toolbar_navigation_items">
                    <ul>
                        <li><a><FontAwesomeIcon icon={faHome} /> Home</a></li>
                        <li><a><FontAwesomeIcon icon={faInfo} /> About Us</a></li>
                        <li><a><FontAwesomeIcon icon={faAddressCard} />Contact Us</a></li>
                    </ul>
                    <br />
                </div>
            </nav>

        </header>
    );
}


export default Toolbar;