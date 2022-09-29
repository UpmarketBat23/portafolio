import React from "react";
import "./Sm-circle-btn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function CircleBtn() {
  return (
    <div className='circlebtn'>
      <a href='https://www.instagram.com/juanpablo.monteros/'>
        <button className='button-big dist sm-btn'>
          <FontAwesomeIcon icon={faInstagram} />
        </button>
      </a>
      <a href='https://www.facebook.com/profile.php?id=100085880156224'>
        <button className='button-big dist sm-btn'>
          <FontAwesomeIcon icon={faFacebookF} />
        </button>
      </a>
      <a href='https://www.linkedin.com/in/juan-pablo-monteros-lazcano-314b74251/'>
        <button className='button-big dist sm-btn'>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </button>
      </a>
    </div>
  );
}

export default CircleBtn;
