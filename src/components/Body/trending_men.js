import React from 'react';
import ProductCard from './products_card'



function trending_men(props) {
    const PICKS = props.arr.map(cloth =>
        {
            if(cloth.men)
            {
                return(
                <div >
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
            <div className="container alignment">
                <div className="row">
                    {PICKS}
                </div>
            </div>
        </div>
    );
}

export default trending_men;