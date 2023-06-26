import React from "react";
import "./Style/checkout.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./StateProvider";

function CheckoutProductCard(props) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: props.id,
    });
  };
  return (
    <>
      <div id={props.id} className="checkout_card">
        <div className="card_wrap">
          <div className="card_left">
            <div className="card_right_image">
              <img src={props.imgsrc} alt="" />
            </div>
          </div>
          <div className="card_right">
            <div className="card_right_info">
              <span className="product_title">{props.pTitle}</span>
              <h4 className="product_price">{props.pRate}</h4>
              <div className="product_rating">
                {Array(props.rating)
                  .fill()
                  .map(() => (
                    <StarIcon />
                  ))}
                <span className="rating_count">{props.rating} ratings </span>
              </div>
              <button onClick={removeFromCart} className="remove_item_btn">
                Remove item
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutProductCard;
