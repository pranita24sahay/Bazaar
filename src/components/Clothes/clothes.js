import React from 'react';
import Caraousel from './carousel';
import Top_picks from './top_picks';
import './Clothes.css';

function clothes(props) {
    return (
        <div>
            <Caraousel />
            <div className="container">
                <div className="row justify-content-center">
                    <h2> Trending for Men</h2>
                    <br />
                </div>
                <div className="row">
                    <Top_picks />
                </div>
            </div>
        </div>
    );
}

export default clothes;