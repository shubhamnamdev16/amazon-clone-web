import React from "react";
import "./Style/footer.css";
import logoImage from "./images/amazon-logo.png";
import LanguageIcon from "@mui/icons-material/Language";

function Footer() {
  return (
    <>
      <div className="footer_container">
        <a href="#">
          <div className="back_to_top">
            <span>Back to top</span>
          </div>
        </a>

        <div className="footer_top">
          <div className="footer_nav_links">
            <div className="nav_col">
              <div className="links">
                <div className="link_heading">
                  <span>Get to Know Us</span>
                </div>
                <ul>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">Press Releases</a>
                  </li>
                  <li>
                    <a href="">Amazon Science</a>
                  </li>
                </ul>
              </div>
              <div className="links">
                <div className="link_heading">
                  <span>Connect with Us</span>
                </div>
                <ul>
                  <li>
                    <a href="">Facebook</a>
                  </li>
                  <li>
                    <a href="">Twitter</a>
                  </li>
                  <li>
                    <a href="">Instagram</a>
                  </li>
                </ul>
              </div>
              <div className="links">
                <div className="link_heading">
                  <span>Make Money with Us</span>
                </div>
                <ul>
                  <li>
                    <a href="">Sell on Amazon</a>
                  </li>
                  <li>
                    <a href="">Sell under Amazon Accelerator</a>
                  </li>
                  <li>
                    <a href="">Protect and Build Your Brand</a>
                  </li>
                  <li>
                    <a href="">Amazon Global Selling</a>
                  </li>
                  <li>
                    <a href="">Become an Affiliate</a>
                  </li>
                  <li>
                    <a href="">Fulfilment by Amazon</a>
                  </li>
                  <li>
                    <a href="">Advertise Your Products</a>
                  </li>
                  <li>
                    <a href="">Amazon Pay on Merchants</a>
                  </li>
                </ul>
              </div>
              <div className="links">
                <div className="link_heading">
                  <span>Let Us Help You</span>
                </div>

                <ul>
                  <li>
                    <a href="">COVID-19 and Amazon</a>
                  </li>
                  <li>
                    <a href="">Your Account</a>
                  </li>
                  <li>
                    <a href="">Returns Centre</a>
                  </li>
                  <li>
                    <a href="">100% Purchase Protection</a>
                  </li>
                  <li>
                    <a href="">Amazon App Download</a>
                  </li>
                  <li>
                    <a href="">Help</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_divider"></div>
        <div className="footer_centre">
          <div className="fc_col_1">
            <div className="col_1_image">
              <img src={logoImage} alt="Footer_Logo" />
            </div>
            <div className="col_1_country_list">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle country_dropdown_btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* <img src={flag_india} className="flag" alt="" /> EN */}
                  {} English
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
            </div>
          </div>
          <div className="fc_col_2">
            <div className="col_2_nav_links">
              <ul>
                <li class="nav_first">
                  <a
                    href="https://www.amazon.com.au/ref=footer_au"
                    class="nav_a"
                  >
                    Australia
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.amazon.com.br/ref=footer_br"
                    class="nav_a"
                  >
                    Brazil
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.ca/ref=footer_ca" class="nav_a">
                    Canada
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.cn/ref=footer_cn" class="nav_a">
                    China
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.fr/ref=footer_fr" class="nav_a">
                    France
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.de/ref=footer_de" class="nav_a">
                    Germany
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.it/ref=footer_it" class="nav_a">
                    Italy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.amazon.co.jp/ref=footer_jp"
                    class="nav_a"
                  >
                    Japan
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.amazon.com.mx/ref=footer_mx"
                    class="nav_a"
                  >
                    Mexico
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.nl/ref=footer_nl" class="nav_a">
                    Netherlands
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.pl/ref=footer_pl" class="nav_a">
                    Poland
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.sg/ref=footer_sg" class="nav_a">
                    Singapore
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.es/ref=footer_es" class="nav_a">
                    Spain
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.amazon.com.tr/ref=footer_tr"
                    class="nav_a"
                  >
                    Turkey
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.ae/ref=footer_ae" class="nav_a">
                    United Arab Emirates
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.amazon.co.uk/ref=footer_uk"
                    class="nav_a"
                  >
                    United Kingdom
                  </a>
                </li>
                <li class="nav_last">
                  <a href="https://www.amazon.com/ref=footer_us" class="nav_a">
                    United States
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="bottom_link_table">
            <table>
              <tbody>
                <tr>
                  <td>
                    <a href="">
                      AbeBooks
                      <br />
                      <span>
                        Books, art
                        <br />& collectibles
                      </span>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      Amazon Web Services <br />
                      <span>
                        Scalable Cloud
                        <br />
                        Computing Services
                      </span>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      Audible
                      <br />
                      <span>
                        Download
                        <br />
                        Audio Books
                      </span>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      DPReview
                      <br />
                      <span>
                        Digital
                        <br />
                        Photography
                      </span>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      IMDb
                      <br />
                      <span>
                        Movies, TV
                        <br />& Celebrities
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">
                      Shopbop
                      <br />
                      <span>
                        Designer
                        <br />
                        Fashion Brands
                      </span>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      Amazon Business
                      <br />
                      <span>
                        Everything For
                        <br />
                        Your Business
                      </span>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      Prime Now
                      <br />
                      <span>
                        2-Hour Delivery
                        <br />
                        on Everyday Items
                      </span>
                    </a>
                  </td>
                  <td>
                    <a href="">
                      Amazon Prime Music
                      <br />
                      <span>
                        100 million songs, ad-free
                        <br />
                        Over 15 million podcast episodes
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="footer_bottom_copyright">
            <div className="bottom_col">
              <span>
                <a target="_blank" href="">
                  Conditions of Use
                </a>
              </span>
              <span>
                <a target="_blank" href="">
                  Privacy Notice
                </a>
              </span>
              <span>
                <a target="_blank" href="">
                  Interest-Based Ads
                </a>
              </span>
            </div>
            <div className="bottom_col">
              <span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
