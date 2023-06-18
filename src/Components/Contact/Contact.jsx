import React, { useRef } from "react";
import Page from "../PageTxt/Page";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kse2faa",
        "template_apka79n",
        form.current,
        "rFahnMuuydWo8Bmfv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="contact" id="Contact">
        <div className="c_content">
          <div className="c-txt">
            <Page
              title="Contact"
              desc1="Ready to bring your vision to life? Let's "
              desc2="  collaborate and create something extraordinary."
            />
            <div className="inputs">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  style={{ height: "3rem", width: "23rem", display: "block" }}
                  type="text"
                  placeholder="Name"
                  className="sm-inputs name"
                />
                <input
                  style={{ height: "3rem", width: "23rem", display: "block" }}
                  type="email"
                  placeholder="Email"
                  className="sm-inputs email"
                />
                <textarea
                  name="message"
                  style={{ resize: "none" }}
                  cols="40"
                  rows="5"
                  placeholder="Message"
                  className="sm-inputs message"
                />
                <input
                  type="submit"
                  value="Send"
                  className="button sm-button"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
