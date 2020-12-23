import React from 'react';
import Caraousel from './carousel';
import Trending_for_men from './trending_men';
import Trending_for_women from './trending_women'
import './Clothes.css';

function clothes() {
    return (
        <div>
            <Caraousel />
            <div className="container">
                <div className="row justify-content-center">
                    <h1> Trending for Men</h1>
                    <br /><br />
                </div>
                <div className="row">
                    <Trending_for_men />
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <h1> Trending for Women</h1>
                    <br />
                </div>
                <div className="row">
                    <Trending_for_women />
                </div>
            </div>
        </div>
    );
}

export default clothes;