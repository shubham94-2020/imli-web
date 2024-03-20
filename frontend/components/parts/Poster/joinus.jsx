import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


export const JoinUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_97dzq8k", "template_vq0uide", form.current, {
        user_email: form.current.user_email.value, // Get the email from the form
        publicKey: "B0fVLyabPeys4qZqZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          window.alert("Subscription successful! Thank you for subscribing.");
          form.current.reset(); // Clear the input field
        },
        (error) => {
          console.log("FAILED...", error.text);
          window.alert("Subscription failed. Please try again."); // Alert for failure
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input
        type="email"
        placeholder="Enter Your Email"
        name="user_email"
        size={38}
        required // Add the required attribute for validation
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default JoinUs;
