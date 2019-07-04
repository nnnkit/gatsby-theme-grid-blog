import React from "react";
import getSocialInfo from "../hooks/socialInfo";

export default function Footer() {
  const { email, facebook, twitter, github } = getSocialInfo();
  return (
    <footer className="footer">
      <img className="footer__logo" src="assets/images/logo7.png" alt="" />
      <div className="padding">
        <div className="container">
          <div className="flex-between footer__wrapper">
            <div className="footer__item footer__contact flex-center">
              <div>
                <h6>Contact Us</h6>
                <a
                  href="mailto:connect@airytails.com"
                  className="flex-start footer__contact-item"
                >
                  <i className="fas fa-envelope" />
                  <p>{email}</p>
                </a>
              </div>
            </div>
            <div className="vr-line" />
            <div className="footer__item footer__subscription">
              <div className="flex-center">
                <div className="footer__item-container" id="subscribeContainer">
                  <h6>Sign up for our Newsletter maling list:</h6>
                  <div className="subscribe-box flex-start">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter Your Email Address"
                      id="subscribeInput"
                    />
                    <button id="subscribeButton">subscribe</button>
                  </div>
                </div>
                <div id="subscribed" />
              </div>
            </div>
            <div className="vr-line" />
            <div className="footer__item footer__social">
              <div className="flex-center">
                <div className="footer__item-container">
                  <h6>Follow Us on Social Media:</h6>
                  <div className="flex-center">
                    <div className="flex-start footer__social-item">
                      <a
                        href={`https://www.facebook.com/${facebook}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-start footer__social-item1"
                      >
                        <i className="fab fa-facebook" />
                      </a>
                      <a
                        href={`https://www.twitter.com/${twitter}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-start"
                      >
                        <i className="fab fa-twitter-square" />
                      </a>
                      <a
                        href={`https://www.github.com/${github}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-start"
                      >
                        <i className="fab fa-github" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
