import React from "react";
import "../styles/Header.css";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-nav">
        <img src={logo} alt="Logo" />
        <nav>
          <ul>
            <li><a href="#">우리의 미션</a></li>
            <li><a href="#">정기배송</a></li>
            <li><a href="#">싱싱마켓</a></li>
            <li><a href="#">커뮤니티</a></li>
          </ul>
        </nav>
      </div>
      <button className="login-btn">로그인</button>
    </header>
  );
};

export default Header;
