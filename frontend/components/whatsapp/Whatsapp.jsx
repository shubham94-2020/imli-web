// WhatsAppButton.js

import React from 'react';
import './whatsapp.css'; // Import CSS file for styling

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-button">
      <a href="https://wa.me/919960928210" target="_blank" rel="noopener noreferrer">
        <img src="./whatsapp.png" alt="WhatsApp Icon" />
        <span className="chat-text">Chat with us</span>
      </a>
    </div>
  );
}

export default WhatsAppButton;
