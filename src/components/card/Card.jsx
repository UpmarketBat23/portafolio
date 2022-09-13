import React from "react";
import "./Card.css";

function SkillsBox(props) {
  const { pic, name } = props;

  return (
    <div className='container'>
      <div className='contt'>
        <img className='imagen' src={pic} alt='foto' />
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default SkillsBox;
