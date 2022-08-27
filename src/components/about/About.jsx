import React from "react";
import "./About.css";
import FotoPrueba from "../assets/photo.svg";
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
      <div className='imagen'>
        <img className='foto' src={juanjuan} alt='foto' />
      </div>
      <div className='container'>
        <div className='texto'>
          <span>
            Name: {Name} Age: {Age} Date of Birth: {DOF} <br />
            Gender: {Gender} Status: {Status} Nationality: {Nationality} <br />
            Languages: {Languages} Location: {Location} Phone: {Phone} <br />
            Email: {Email} Linkedin: {Linkedin}
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
