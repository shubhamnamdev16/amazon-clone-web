import React from "react";
import "./Style/loginSignup.css";
import amazon_logo_3 from "./images/amazon-logo-3.png";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function LoginSignUp() {
  return (
    <>
      <div className="login_signup_page">
        <div className="login_page_logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={amazon_logo_3} alt="logo" className="header_logo_img" />
          </Link>
        </div>
        <div className="login_signup_form_col">
          <div className="login_signup_form_wrap">
            <p className="signin-heading">Sign in</p>
            <form action="">
              <div class="input-group">
                <label for="emailNumberField" class="form-label">
                  Email or mobile phone number
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="emailNumberField"
                />
              </div>
              <div class="input-group">
                <label for="passwordField" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="passwordField"
                />
              </div>
              <p className="aggrement_note">
                By continuing, you agree to Amazon's
                <a href="#">Conditions of Use</a>and
                <a href="#">Privacy Notice</a>
              </p>
              <p className="needhelp">
                <span className="arrow_icon">
                  <ArrowRightIcon />
                </span>
                <a href="">Need help?</a>
              </p>
              <button type="submit" class="sign-in-btn">
                Sign in
              </button>
            </form>
          </div>
          <div className="create_new_account_col">
            <div className="create_account_wrap">
              <p className="new_user">
                <span>New to Amazon?</span>
              </p>
              <button type="submit" class="new-account-btn">
                Create your Amazon account
              </button>
            </div>
          </div>
        </div>
        <div className="login_signUp_bottom">
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
                Help
              </a>
            </span>
          </div>
          <div className="bottom_col">
            <span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginSignUp;
