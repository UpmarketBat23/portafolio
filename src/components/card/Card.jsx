import React from "react";
import FotoPrueba from "../assets/photo.svg";
import HtmlLogo from "../assets/html5logo.svg";
import "./Card.css";

function SkillsBox(props) {
  const { foto, nombre } = props;

  return (
    <div className='container'>
      <div className='contt'>
        <img className='imagen' src={foto} alt='foto' />
        <h1>{nombre}</h1>
      </div>
    </div>
  );
}

export default SkillsBox;
