import React from "react";
import HtmlLogo from "../assets/html5logo.svg";
import "./IsoCard.css";

function IsoCard() {
  return (
    <div class="isometric-card">
      <img className="logo" src={HtmlLogo} alt="foto" width="5px" />
    </div>
  );
}

export default IsoCard;
