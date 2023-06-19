import React from "react";
import "./Style/header.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import amazon_logo from "./images/amazon-logo.png";
import bottom_nav_image from "./images/bottom_nav_image.jpg";
import flag_india from "./images/flag_india.png";
import PlaceIcon from "@mui/icons-material/Place";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
// import MenuIcon from "@mui/icons-material/Menu";
import { IoMenu } from "react-icons//io5";
function Header() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <>
      <div className="header-top">
        <div className="header_left_wrap">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="header_logo">
              <img src={amazon_logo} alt="logo" className="header_logo_img" />
            </div>
          </Link>

          <div className="nav-global-location-slot">
            <div className="location-icon">
              <PlaceIcon />
            </div>
            <div className="location-content">
              <span className="nav_itemLineOne">Hello</span>
              <span className="nav_itemLineTwo">Select your address</span>
            </div>
          </div>
        </div>
        <div className="header_fill_wrap">
          <div className="header_search">
            {/* <div className="header_search_form">
              <input type="text" name="name" className="header-search-input" />
              <button className="seach-icon-button" variant="contained">
                {<SearchIcon />}
              </button>
            </div> */}

            <div className="input-group">
              <button
                className="btn btn-outline-secondary dropdown-toggle dropdown_btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    All Categories
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Alexa Skills
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Amazon Devices
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Amazon Fashion
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Amazon Pharmacy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Appliances
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Apps & Games
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Baby
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Beauty
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Books
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Car & Motorbike
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Clothing & Accessories
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Collectibles
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Computers & Accessories
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Deals
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Electronics
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Furniture
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Garden & Outdoors
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Grocery & Gourmet Foods
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Health & Personal Care
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Home & Kitchen
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Industrial & Scientific
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Jewellery
                  </a>
                </li>
              </ul>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
                placeholder="Search Amazon.in"
              />
              <button
                class="btn btn-outline-secondary search-icon-button"
                type="button"
                id="button-addon2"
                aria-describedby="button-addon2"
              >
                {<SearchIcon />}
              </button>
            </div>
          </div>
        </div>
        <div className="header_right_wrap">
          <div className="header_navigation">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle country_dropdown_btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={flag_india} className="flag" alt="" /> EN
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    English - EN
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    हिन्दी - HI - अनुवाद
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    தமிழ் - TA - மொழிபெயர்ப்பு
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    తెలుగు - TE - అనువాదం
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ಕನ್ನಡ - KN - ಭಾಷಾಂತರ
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    മലയാളം - ML - വിവർത്തനം
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    বাংলা - BN - অনুবাদ
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    मराठी - MR - भाषांतर
                  </a>
                </li>
              </ul>
            </div>
            <Link to="/LoginSignUp" style={{ textDecoration: "none" }}>
              <div className="nav-items">
                <span className="nav_itemLineOne">Hello, sign in</span>
                <span className="nav_itemLineTwo">Account & Lists</span>
              </div>
            </Link>
            <div className="nav-items">
              <span className="nav_itemLineOne">Returns</span>
              <span className="nav_itemLineTwo">& Orders</span>
            </div>
            <Link to="/Checkout" style={{ textDecoration: "none" }}>
              <div className="nav-items">
                <span className="nav_itemLineTwo cart_count">
                  {cart.length}
                </span>
                <ShoppingCartIcon className="shopping_cart" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header_bottom_left">
          <ul>
            <li>
              <a href="">
                <IoMenu className="menu_bars" />
                All
              </a>
            </li>
            <li>
              <a href="">Amazon miniTV</a>
            </li>
            <li>
              <a href="">Best Sellers</a>
            </li>
            <li>
              <a href="">Mobiles</a>
            </li>
            <li>
              <a href="">Today's Deals</a>
            </li>
            <li>
              <a href="">Customer Service</a>
            </li>
            <li>
              <a href="">Electronics</a>
            </li>
            <li>
              <a href="">Prime</a>
            </li>
            <li>
              <a href="">Amazon Pay</a>
            </li>
            <li>
              <a href="">New Releases</a>
            </li>
            <li>
              <a href="">Home & Kitchen</a>
            </li>
          </ul>
        </div>
        <div className="header_bottom_right">
          <img src={bottom_nav_image} alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
