import React from "react";
import "./Style/product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./StateProvider";
// import reducer from "./reducer";

function Product(props) {
  const [state, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: props.id,
        imgsrc: props.imgsrc,
        pRate: props.pRate,
        pTitle: props.pTitle,
        rating: props.rating,
      },
    });
  };
  return (
    <>
      <div id={props.id} className="product_card">
        <div className="card_wrap">
          <div className="product_image">
            <img src={props.imgsrc} alt="" className="product_card_image" />
          </div>

          <div className="product_info">
            <div className="product_rating">
              {Array(props.rating)
                .fill()
                .map(() => (
                  <StarIcon />
                ))}
              <span className="rating_count">{props.rating} ratings </span>
            </div>
            <h3 className="product_title">{props.pTitle}</h3>
            <h2 className="product_price">{props.pRate}</h2>

            <button onClick={addToCart} className="add_to_cart_btn product_btn">
              <a href="#">Add to cart</a>
            </button>
            <button className="buy_now_cart_btn product_btn">
              <a href="#">Buy now</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
