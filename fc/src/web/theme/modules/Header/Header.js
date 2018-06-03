import React from "react";
import Navigation from "./Navigation";
import Link from "theme/ui/atoms/Typography/Link";
import Logo from "theme/ui/atoms/Logo";
import H1 from "../../ui/atoms/Typography/Heading/H1";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__top__logo">
          <Link to="/">
            <Logo />
            <H1>Nogento</H1>
          </Link>
        </div>
      </div>
      <div className="header__nav">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
