import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

const SideBar = props => (
    <nav className="side-drawer">
        <ul>
            <Link to='/clothes'><li>Clothes</li></Link>
            <li><a href="/">Footwear</a></li>
            <li><a href="/">Jewellery</a></li>
            <li><a href="/">Furniture</a></li>
            <li><a href="/">Electronics</a></li>
            <li><a href="/">Photos</a></li>
        </ul>
    </nav>
);

export default SideBar;