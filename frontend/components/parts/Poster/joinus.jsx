import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const JoinUs = () => {
  const form = useRef();
  const [buttonClicked, setButtonClicked] = useState(false); // State to track button click

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonClicked(true); // Set buttonClicked to true when clicked

    emailjs
      .sendForm("service_97dzq8k", "template_vq0uide", form.current, {
        user_email: form.current.user_email.value,
        publicKey: "B0fVLyabPeys4qZqZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          window.alert("Subscription successful! Thank you for subscribing.");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          window.alert("Subscription failed. Please try again.");
        }
      );
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const buttonStyle = {
    marginTop: "10px",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    backgroundColor: buttonClicked ? "#555" :"fff", // Change color when buttonClicked is true
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={containerStyle}>
      <input
        type="email"
        placeholder="Enter Your Email"
        name="user_email"
        size={38}
        required
      />
      <button
        type="submit"
        style={buttonStyle}
        onClick={() => setButtonClicked(false)} // Reset buttonClicked state when clicked
      >
        Subscribe
      </button>
    </form>
  );
};

export default JoinUs;
