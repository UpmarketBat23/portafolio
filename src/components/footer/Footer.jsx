import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Footer.css";
import RippleButton from "../pruebas/Pruebas";
import CircleBtn from "../sm-btn/Sm-circle-btn";
import { useForm } from "react-hook-form";

function Footer() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const form = useRef();

  const sendEmail = (e) => {
    console.log(errors);
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
      <span className='contact-title'>Contact</span>
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
        <ul>
          <li>
            <label htmlFor='name'>Name:</label> <br />
            <input
              type='text'
              {...register("from_name", {
                required: "Enter Name",
              })}
            />{" "}
            {errors.from_name && (
              <p style={{ color: "red" }}>{errors.from_name.message}</p>
            )}
          </li>
          <li>
            <label htmlFor='mail'>E-mail address:</label> <br />
            <input
              type='email'
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </li>
          <li>
            <label htmlFor='subject'>Subject</label> <br />
            <input type='text' {...register("subject")} />
            {errors.subject && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </li>
          <li>
            <label htmlFor='msg'>Message:</label> <br />
            <textarea {...register("message")}></textarea>
          </li>
          <li className='button-form'>
            <RippleButton>
              <input
                style={{ border: "0px", width: "115px" }}
                type='submit'
                value='Send Message'
                onClick={() => {
                  console.log("click", errors);
                }}
              />
            </RippleButton>
          </li>
        </ul>
      </form>
      <div className='social-media'>
        <CircleBtn />
      </div>
    </div>
  );
}

export default Footer;
