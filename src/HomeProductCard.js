import React from "react";
import "./Style/homeProductCard.css";
import FourImageCard from "./FourImageCard";
import SingleImageCard from "./SingleImageCard";

function HomeProductCard(props) {
  return (
    <>
      <FourImageCard cardTitle="Up to 50% off | Baby products & toys | Amazon Brands" />
      <FourImageCard cardTitle="Book travel tickets and get exciting offers" />
      <FourImageCard cardTitle="Upgrade your home | Amazon Brands & more" />
      <SingleImageCard cardTitle="Bluetooth Calling Smartwatch starts at ₹1,999" />
    </>
  );
}

export default HomeProductCard;
