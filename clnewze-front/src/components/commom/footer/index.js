import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="ft-content">
        <p className="ft-service">
          <a href="#">서비스소개</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="#">회사소개</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="#">채용정보</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="#">이용약관</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="#">개인정보취급방침</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="#">고객의소리</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="#">제휴/광고문의</a>&nbsp;&nbsp;
        </p>
        <span className="ft-copy">
          Copyright (c) 2023 CLNEWZE., Ltd, All Rights Reserved
        </span>
      </div>
    </div>
  );
}

export default Footer;
