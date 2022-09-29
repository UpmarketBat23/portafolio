import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Footer.css";
import RippleButton from "../pruebas/Pruebas";
import CircleBtn from "../sm-btn/Sm-circle-btn";
import { useForm } from "react-hook-form";

function Footer() {
  const {
    register,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4a1uhd1",
        "template_yakohpn",
        form.current,
        "mcWNKOEAfbxqgjGQP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div>
      <span className='contact'>Contact</span>
      <form ref={form} onSubmit={sendEmail}>
        <ul>
          <li>
            <label htmlFor='name'>Nombre:</label>
            <input
              type='text'
              id='name'
              name='from_name'
              {...register("from_name")}
            />
          </li>
          <li>
            <label htmlFor='mail'>Correo electrónico:</label>
            <input
              type='email'
              id='mail'
              name='user_email'
              {...register("user_email", {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            {errors.email?.type === "pattern" && (
              <p style={{ color: "red" }}>The email format is incorrect</p>
            )}
          </li>
          <li>
            <label htmlFor='subject'>Subject</label>
            <input
              type='subject'
              id='subject'
              name='subject'
              {...register("subject")}
            />
          </li>
          <li>
            <label htmlFor='msg'>Mensaje:</label>
            <textarea
              id='msg'
              name='message'
              {...register("message")}
            ></textarea>
          </li>
          <li className='button-form'>
            <RippleButton>
              <input
                style={{ border: "0px", width: "115px" }}
                type='submit'
                value='Send Message'
              />
            </RippleButton>
          </li>
          <div className='social-media'>
            <CircleBtn />
          </div>
        </ul>
      </form>
    </div>
  );
}

export default Footer;
