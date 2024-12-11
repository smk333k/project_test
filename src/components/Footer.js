import React from "react";
import "../styles/Footer.css";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>어글리어스 고객센터 070.4769.0271</h3>
          <p>화-목요일: 11:00 ~ 18:00 (점심시간: 12:00 ~ 13:00)</p>
          <p>월-금요일: 09:00 ~ 18:00 (점심시간: 12:00 ~ 13:00)</p>
          <p>토-일, 공휴일: 휴무</p>
        </div>
        <div className="footer-buttons">
          <button className="footer-btn1">문의하기</button>
          <button className="footer-btn2">자주 묻는 질문</button>
        </div>
      </div>
      <div className="footer-bottom">
        <img src={logo} alt="Company Logo" className="footer-logo" />
        <p>
          상호명: 주식회사 캐비지 | 대표: 최현주 | 사업자등록번호: 572-81-02287 |
          소재지: 서울특별시 영등포구 양평로 144, 8층 (양평동5가)
        </p>
        <p>Copyright © 2024 주식회사 캐비지 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
