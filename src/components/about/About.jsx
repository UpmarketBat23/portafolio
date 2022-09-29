import React from "react";
import "./About.css";
import juanjuan from "../assets/IMG_1860_pp.jpg";

function About(props) {
  const {
    Name,
    Age,
    DOF,
    Gender,
    Status,
    Nationality,
    Languages,
    Location,
    Phone,
    Email,
    Linkedin,
  } = props;
  return (
    <div className='pppp'>
      <div>
        <span className='about-title'>About Me</span>
      </div>
      <div className='imagen'>
        <img className='foto' src={juanjuan} alt='foto' />
      </div>
      <div className='datos'>
        <div className='text'>
          <span>Name: {Name}</span>
          <span>Age: {Age}</span>
          <span>Date of Birth: {DOF}</span>
          <span>Gender: {Gender}</span>
          <span>Status: {Status}</span>
          <span>Nationality: {Nationality}</span>
          <span>Languages: {Languages}</span>
          <span>Location: {Location} </span>
          <span>Phone: {Phone}</span>
          <span>Email: {Email}</span>
          <span>Linkedin: {Linkedin}</span>
        </div>
      </div>
    </div>
  );
}

export default About;
