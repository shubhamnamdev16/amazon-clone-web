import React from "react";
import "./Style/home.css";
import bannerImage from "./images/banner_image.jpg";
import bannerImage_2 from "./images/banner_image_2.jpg";
import bannerImage_3 from "./images/banner_image_3.jpg";
import bannerImage_4 from "./images/banner_image_4.jpg";
import bannerImage_5 from "./images/banner_image_5.jpg";
import bannerImage_6 from "./images/banner_image_6.jpg";
import bannerImage_7 from "./images/banner_image_7.jpg";
import bannerImage_8 from "./images/banner_image_8.jpg";
import Product from "./Product";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import HomeProductCard from "./HomeProductCard";
// import { useStateValue } from "./StateProvider";

function Home(props) {
  return (
    <>
      <div className="homepage_container">
        <div className="home_banner">
          <div
            id="carouselExampleControlsNoTouching"
            className="carousel slide banner_carousel"
            data-bs-touch="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={bannerImage} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={bannerImage_2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={bannerImage_3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={bannerImage_4} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={bannerImage_5} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={bannerImage_6} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={bannerImage_7} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={bannerImage_8} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev"
            >
              <span className="prev-icon" aria-hidden="true">
                <ArrowBackIosIcon className="left_arrow" />
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next"
            >
              <span className="next-icon" aria-hidden="true">
                <ArrowForwardIosIcon className="right_arrow" />
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="home_card_container">
          <div className="home_row">
            <div className="home_row_wrap">
              {/* <Product
                id="product"
                imgsrc={require("./images/product_1.jpg")}
                rating={4}
                pTitle="Fire-Boltt Ninja Call Pro Plus 1.83 Smart Watch with Bluetooth Calling"
                pRate="1599"
              />
              <Product
                imgsrc={require("./images/pro_2.jpg")}
                rating={5}
                pTitle="Fire-Boltt India's No 1 Smartwatch Brand Talk 2 Bluetooth Calling Smartwatch"
                pRate="1699"
              />
              <Product
                imgsrc={require("./images/pro_3.jpg")}
                rating={3}
                pTitle="Fire-Boltt Phoenix Smart Watch with Bluetooth Calling 1.3,120+ Sports Modes, 240 * 240 PX High Res"
                pRate="1799"
              />
              <Product
                imgsrc={require("./images/pro_2.jpg")}
                rating={5}
                pTitle="Fire-Boltt India's No 1 Smartwatch Brand Talk 2 Bluetooth Calling Smartwatch"
                pRate="1699"
              />
              <Product
                imgsrc={require("./images/pro_3.jpg")}
                rating={2}
                pTitle="Fire-Boltt Phoenix Smart Watch with Bluetooth Calling 1.3,120+ Sports Modes, 240 * 240 PX High Res"
                pRate="1799"
              /> */}

              <HomeProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
