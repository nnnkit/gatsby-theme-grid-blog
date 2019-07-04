import React from "react";
import { Link } from "gatsby";
import getSiteMetadata from "../hooks/siteMetadata";

export default function Header() {
  const { name } = getSiteMetadata();
  return (
    <header className="header header-secondary">
      <div className="container">
        <nav className="nav flex-between">
          <Link to="/" className="logo">
            <div className="section">
              <h1 className="t-stroke--shadow">{name}</h1>
            </div>
          </Link>
          <ul className="flex-between nav__menu">
            <li className="nav__items">
              <Link className="nav__link" to="/">
                Home
              </Link>
            </li>
            <li className="nav__items">
              <Link className="nav__link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="toggle">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
        </nav>
      </div>
    </header>
  );
}
