import React from "react";

function Header({ title, image, children }) {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container-bg">
          <img src={image} alt="Header Background Img" />
        </div>
        <div className="header__content">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
