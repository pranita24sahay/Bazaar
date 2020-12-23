import React from 'react';
import SideBarButton from '../sidebar/sidebarbutton';
import './Toolbar.css';
import Logo from '../../Images/Logo_transparent.png';
import {Button } from 'reactstrap';
import Login from '../Login'


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
                        <li><Login /></li>
                    </ul>
                    <br />
                </div>
            </nav>
        </header>
    );
}


export default Toolbar;