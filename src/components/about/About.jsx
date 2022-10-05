import React from "react";
import "./About.css";
import juanjuan from "../assets/4 x 4.jpg";

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
    <div className='about about-container'>
      <div>
        <span className='about-title'>About Me</span>
      </div>
      <div className='imagen'>
        <img className='foto' src={juanjuan} alt='foto' />
      </div>
      <div className='datos'>
        <div className='text'>
          <span>
            <strong>Name:</strong> {Name}
          </span>
          <span>
            <strong>Age:</strong> {Age}
          </span>
          <span>
            <strong>Date of Birth:</strong> {DOF}
          </span>
          <span>
            <strong>Gender:</strong> {Gender}
          </span>
          <span>
            <strong>Status:</strong> {Status}
          </span>
          <span>
            <strong>Nationality:</strong> {Nationality}
          </span>
          <span>
            <strong>Languages:</strong> {Languages}
          </span>
          <span>
            <strong>Location:</strong> {Location}
          </span>
          <span>
            <strong>Phone:</strong> {Phone}
          </span>
          <span>
            <strong>Email:</strong> {Email}
          </span>
          <span>
            <strong>Linkedin:</strong> {Linkedin}
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
