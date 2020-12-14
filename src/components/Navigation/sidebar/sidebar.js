import React from 'react';
import './sidebar.css';

const SideBar = props => (
    <nav className="side-drawer">
        <ul>
            <li><a href="/">Clothes</a></li>
            <li><a href="/">Footwear</a></li>
            <li><a href="/">Jewellery</a></li>
            <li><a href="/">Furniture</a></li>
            <li><a href="/">Electronics</a></li>
            <li><a href="/">Photos</a></li>
        </ul>
    </nav>
);

export default SideBar;