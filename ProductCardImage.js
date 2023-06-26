import React from "react";
import "./Style/homeProductCard.css";
import FourImageCard from "./FourImageCard";

function ProductCardImages(props) {
  return (
    <>
      <div className="card_images">
        <div className="image_box">
          <img src={props.imageSrc} alt="" />
          <p className="image_title">{props.imageTitle}</p>
        </div>
      </div>
    </>
  );
}

export default ProductCardImages;
