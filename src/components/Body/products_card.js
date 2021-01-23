import React, { useState } from 'react';
import '@fortawesome/fontawesome-free';
import {faHeart} from "@fortawesome/free-solid-svg-icons";


const SuccessModal = ({ func,show }) => {
  return (
    <div className= {`product-card__success-modal ${show ? 'fade-in' : 'fade-out'}`}>
      <span
        class="material-icons close"
        onClick={() => {
          func(false);
        }}
      >
        close
      </span>
      <h3>
        <span class="material-icons">shopping_cart</span>
        Item added to your cart!
      </h3>
      <div className="view-cart-btn">View Cart</div>
      <div className="checkout-btn">Checkout</div>
    </div>
  );
};

const SizeGrid = ({ soldOut, selectedSize, func }) => {
  const sizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13];
  const items = [];
  sizes.map((size, index) => {
    let selectedClass = selectedSize === size ? "selected" : "";
    items.push(
      soldOut.includes(size) ? (
        <div className="product-card__size-grid-item-unavailable " key={index}>
          {size}
        </div>
      ) : (
        <div
          className={"product-card__size-grid-item " + selectedClass}
          onClick={() => func(size)}
          key={index}
        >
          {size}
        </div>
      )
    );
  });
  return <div className="product-card__size-grid">{items}</div>;
};


const ProductCard = ({ product }) => {
  const [favorite, setFavorite] = useState(false);
  const [showSizeOption, setShowSizeOption] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [hoveImage, setHoverImage] = useState(false);

  let image = hoveImage ? product.image2 : product.image;
  let validSalePrice =
    product.sale_price !== "" && product.sale_price < product.price;

  return (
    <div className="product-card">
      <SuccessModal func={setShowSuccessModal} show={showSuccessModal}/>
      <figure>
        {/* top section */}
        <div className="product-card__feature">
          {product.sale && <label className="on-sales">sale</label>}
          {product.new_arrival && (
            <label className="new-arrival">new arrival</label>
          )}
          {favorite ? (
            <span
              className="fa fa-heart fa-2x favorite"
              onClick={() => setFavorite(!favorite)}
            >
            </span>
          ) : (
            <span
              class="fa fa-heart-o fa-2x favorite-border"
              onClick={() => setFavorite(!favorite)}
            >
            </span>
          )}
        </div>
        {/* image section  */}
        <div className="product-card__img">
          <picture
            onMouseOver={() => setHoverImage(true)}
            onMouseOut={() => setHoverImage(false)}
          >
            <img src={image} alt={product.title} />
          </picture>
        </div>
        {/* button section start */}
        <div className="product-card_control">
          {showSizeOption && (
            <SizeGrid
              soldOut={product.unavailable_size}
              selectedSize={selectedSize}
              func={setSelectedSize}
            />
          )}
          {selectedSize !== "" ? (
            <div
              className="product-card__buy"
              onClick={() => {
                setShowSizeOption(false);
                setSelectedSize("");
                setShowSuccessModal(true);
              }}
            >
              ADD TO BAG
            </div>
          ) : showSizeOption ? (
            <div
              className="product-card__buy"
              onClick={() => setShowSizeOption(true)}
            >
              SELECT SIZE
            </div>
          ) : (
            <div
              className="product-card__buy"
              onClick={() => setShowSizeOption(true)}
            >
              QUICK BUY
            </div>
          )}
        </div>
      </figure>
      {/*  product info section start */}
      <div className="product-card__caption">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>
          {validSalePrice && (
            <span className="sale-price">
              ${product.sale_price.toLocaleString()}
            </span>
          )}

          <span className={`price ${validSalePrice ? "dashed" : ""}`}>
            ${product.price.toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
