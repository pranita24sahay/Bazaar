import React from 'react';
import ProductCard from './products_card'



function trending_men(props) {
    const PICKS = props.arr.map(cloth =>
        {
            if(cloth.men)
            {
                return(
                <div className="offset-sm-1">
                    <ProductCard product={cloth} key={cloth.id} />
                </div>
                )
            }
            else
            {
              return(
                <div></div>
              )
            }
        })
    return (
        <div className="container">
            <br />
            <div className="row justify-content-center">
                <h1> Trending in men </h1>
            </div>
            <br />
            <div className="row">
            {PICKS}
            </div>
            
        </div>
    );
}

export default trending_men;