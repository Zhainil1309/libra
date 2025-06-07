import React from 'react';
import '../CSS/ContactBar.css';
import { FaWhatsapp, FaPhoneAlt, FaInstagram, FaFacebookF } from 'react-icons/fa';

function ContactBar() {
  return (
    <div className="contact-bar">
      <a href="https://wa.me/919909254684" target="_blank" rel="noopener noreferrer" className="whatsapp">
        <FaWhatsapp />
      </a>
      <a href="tel:++91 9909254684" className="call">
        <FaPhoneAlt />
      </a>
      <a href="https://www.instagram.com/libraeventsdecorators?utm_source=ig_web_button_share_sheet&igsh=MXQwbjJzZmo0NmMwdA==" target="_blank" rel="noopener noreferrer" className="instagram">
        <FaInstagram />
      </a>
    </div>
  );
}

export default ContactBar;
