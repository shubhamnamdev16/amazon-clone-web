import React from "react";
import "./Style/homeProductCard.css";
import ProductCardImages from "./ProductCardImage";
import bluetooth_smartwatch from "./images/bluetooth_smartwatch.jpg";
import Clearance_store_Desktop from "./images/Clearance_store_Desktop.jpg";
import { Link } from "react-router-dom";
function SingleImageCard(props) {
  return (
    <>
      <div className="single_image_card_container">
        <h2 className="card_heading">{props.cardTitle}</h2>
        <Link to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
          <div className="single_image_card_info">
            <ProductCardImages imageSrc={bluetooth_smartwatch} />
          </div>
        </Link>
        <a href="#" target="_blank" className="see_more_link">
          See more
        </a>
      </div>
    </>
  );
}

export default SingleImageCard;
