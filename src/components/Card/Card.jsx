import { useState } from "react";
import "./Card.css";

const Card = ({ data, cartItems, setCartItems }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setCartItems(cartItems - 1);
      setIsClicked(!isClicked);
    } else {
      setCartItems(cartItems + 1);
      setIsClicked(!isClicked);
    }
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {data.isOnSale ? (
          <div className="badge bg-dark text-white position-absolute sale">
            Sale
          </div>
        ) : (
          <></>
        )}

        <img className="card-img-top" src={data.img} alt={data.name} />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{data.name}</h5>
            {data.rating && (
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
              </div>
            )}
            <span className="text-muted text-decoration-line-through">
              {data.oldPrice}
            </span>
            {data.price}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {data.isCartAddable ? (
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={handleClick}
              >
                {isClicked ? "Remove to cart" : "Add to cart"}
              </button>
            ) : (
              <button className="btn btn-outline-dark mt-auto">
                View Options
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
