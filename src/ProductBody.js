import { useState } from "react";
import cartIcon from "./assets/icon-cart.svg";

export function ProductBody(props) {
  const [qty, setQty] = useState(0);

  //increment qty up
  function incrementUp() {
    setQty(qty + 1);
  }

  //increment qty down
  function incrementDown() {
    if (qty === 0) {
      return;
    }
    setQty(qty - 1);
  }

  return (
    <div className="product-body-container">
      <h3>SNEAKER COMPANY</h3>
      <h1>{props.title}</h1>
      <p className="product-body-description">{props.description}</p>
      <div className="product-description-price">
        <div>
          <h1>£{props.price}</h1>
          <span className="product-description-price-pc">
            {props.reduced.percentage}%
          </span>
        </div>
        <span className="product-description-price-old">
          £{(props.price / props.reduced.percentage) * 100}{" "}
        </span>
      </div>
      <div className="product-body-quantity-holder">
        <div className="product-body-quantity-backdrop">
          <span
            className="product-body-quantity-button"
            onClick={incrementDown}
          >
            -
          </span>
          <span style={{ fontWeight: 700, fontSize: "20px" }}>{qty}</span>
          <span className="product-body-quantity-button" onClick={incrementUp}>
            +
          </span>
        </div>
      </div>
      <div>
        <button className="product-body-addtocart">
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" style={{margin:"0px 20px 0px 20px"}}>
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="white"
              fillRule="nonzero"
              
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
}
