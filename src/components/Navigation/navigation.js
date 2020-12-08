import React from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import Logo from '../Images/Logo.png'

function NavigationBar() 
{
    return (
        <Navbar className="dark expand navbar navbar-expand-sm bg-dark">
            <NavbarBrand className="mr-auto" href="/"><img src={Logo} height="40" width="41" alt='Bazaar' /></NavbarBrand>
                <Nav >
                <NavItem>
                    <a href="#"><span className="fa fa-home fa-lg"></span> Home</a>
                </NavItem>
                <NavItem>
                    <a href="#"><span className="fa fa-info fa-lg"></span> About Us </a>
                </NavItem>
                <NavItem>
                    <a href="#"><span className="fa fa-address-card fa-lg"></span> Contact Us </a>
                </NavItem>
                </Nav>
    </Navbar>
    );    
}
export default NavigationBar;