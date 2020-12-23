import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

const SideBar = props => (
    <nav className="side-drawer">
        <ul>
            <Link to='/clothes'><li>Clothes</li></Link>
            <Link to='/footwear'><li>Footwear</li></Link>
            <Link to='/jewellery'><li>Jewellery</li></Link>
        </ul>
    </nav>
);

export default SideBar;