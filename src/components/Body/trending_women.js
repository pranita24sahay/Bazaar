import React from 'react';
import ProductCard from './products_card'


function trending_women(props) {
    const PICKS = props.arr.map(cloth =>
        {
            if(cloth.women)
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
               <h1> Trending in women  </h1>
            </div>
            <br /><div className="container alignment">
            <div className="row">
            {PICKS}
            </div></div>
        </div>
    );
}

export default trending_women;