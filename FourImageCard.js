import React from "react";
import "./Style/homeProductCard.css";
import ProductCardImages from "./ProductCardImage";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

function FourImageCard(props) {
  return (
    <>
      <div className="card_container">
        <h2 className="card_heading">{props.cardTitle}</h2>
        <div className="card_info">
          <ProductCardImages
            imageSrc={img1}
            imageTitle="Diapers, wipes & more"
          />
          <ProductCardImages imageSrc={img2} imageTitle="Soft toys" />
          <ProductCardImages imageSrc={img3} imageTitle="Indoor games" />
          <ProductCardImages imageSrc={img4} imageTitle="Outdoor & more" />
        </div>
        <a href="#" target="_blank" className="see_more_link">
          See more
        </a>
      </div>
    </>
  );
}

export default FourImageCard;
