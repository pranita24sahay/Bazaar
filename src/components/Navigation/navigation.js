import React from 'react';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import Logo from '../Images/Logo.png';
import './Navigation.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo , faAddressCard,  faHome } from "@fortawesome/free-solid-svg-icons";


function NavigationBar() 
{
    return (
        <Navbar className= "navbar-expand-sm bg-custom">
            <NavbarBrand className="mr-auto" href="/">Bazaar It</NavbarBrand>
            <Nav >
                <NavItem>
                    <a href="#"><FontAwesomeIcon icon={faHome} />Home</a>
                </NavItem>
                <NavItem>
                    <a href="#"><FontAwesomeIcon icon={faInfo} /> About Us </a>
                </NavItem>
                <NavItem>
                    <a href="#"><FontAwesomeIcon icon={faAddressCard} /> Contact Us </a>
                </NavItem>
            </Nav>
        </Navbar>
    );    
}
export default NavigationBar;