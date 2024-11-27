import React from "react";
// file imports that you need -- css, media images
import "./Header.css";
import logoImage from "../../assets/zac_reaction.jpg";

// declare the component
function Header() {
  return (
    <>
      <img src={logoImage} className="header-img" alt="logo for website" />
      <h2 className="header-title">Welcome to the Meme Generator App</h2>
      <h4 className="header-text">A Dynamic Web App using React</h4>
    </>
  );
}

// export statement
export default Header;
