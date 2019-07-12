import React from "react";
import getSocialInfo from "../hooks/socialInfo";

export default function Footer() {
  const { email, facebook, twitter, github } = getSocialInfo();
  return (
    <footer className="footer">
      <div className="flex-center footer__social">
        <div className="footer__social-item">
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
          <a
            href={`mailto:${email}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-start"
          >
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
    </footer>
  );
}
