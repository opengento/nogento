import React from "react";
import Navigation from "./Navigation";
import Link from "theme/ui/atoms/Typography/Link";
import Logo from "theme/ui/atoms/Logo";
import H1 from "../../ui/atoms/Typography/Heading/H1";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <Logo />
            <H1>Nogento</H1>
          </Link>
        </div>
        <div className="header__nav">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
