import React from "react";
import logoPath from "../images/logo.svg";

function Header() {
  return (
      <header className="header">
        <img
          className="logo"
          id="logo"
          src={logoPath}
          alt="around the us logo"
        ></img>
      </header>
  );
}
export default Header;