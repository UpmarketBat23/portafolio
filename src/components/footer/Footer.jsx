import React from "react";
import {} from "react-bootstrap";
// import ReactLogo from "../assets/React-icon.svg";
import "./Footer.css";
import RippleButton from "../pruebas/Pruebas";

function Footer() {
  return (
    <div>
      <form action=''>
        <ul>
          <li>
            <label htmlFor='name'>Nombre:</label>
            <input type='text' id='name' name='user_name' />
          </li>
          <li>
            <label htmlFor='mail'>Correo electrónico:</label>
            <input type='email' id='mail' name='user_mail' />
          </li>
          <li>
            <label htmlFor='msg'>Mensaje:</label>
            <textarea id='msg' name='user_message'></textarea>
          </li>
          <li className='button-form'>
            <RippleButton color='#000' type='submit'>
              Envíe su mensaje
            </RippleButton>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Footer;
