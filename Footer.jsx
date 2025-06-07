import React from 'react';
import '../CSS/Footer.css';
import footerBg from '../assets/download15.jpg';
import libra_logo from "../assets/libra_logo.png";
import { FaClock, FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaWhatsapp , FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="site-footer"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className="footer-container">
        

<div className="footer-logo">
  <img src={libra_logo} alt="Libra Logo" className="logo-img" />
</div>


        <div className="footer-sections">
<div className="footer-social">
<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
<a href="https://www.instagram.com/libraeventsdecorators?utm_source=ig_web_button_share_sheet&igsh=MXQwbjJzZmo0NmMwdA==" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
<a href="https://wa.me/919909254684" target="_blank" rel="noopener noreferrer" className="social-icon"><FaWhatsapp /></a>
<a href="tel:+919909254684" className="social-icon"><FaPhone /></a>
</div>
          <div className="footer-section">
            <h4>Company</h4>
            <a href="/AboutUs">About Us</a>
            <a href="/ContactUS">Contact Us</a>
          </div>

          <div className="footer-section">
            <h4>Explore</h4>
            <a href="/events">Events</a>
            <a href="#">Venues</a>
            <a href="/gallery">Gallery</a>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <p className="text-white text-decoration-none">
  <a 
    href="tel:+919909254684" 
    style={{
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '1px 12px',
      borderRadius: '8px',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      backgroundColor: 'transparent'
    }}
    className="contact-link"
  >
    <FaPhone />
    <span>+91 9909254684</span>
  </a>
  <a 
    href="tel:+919825077188" 
    style={{
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '1px 12px',
      borderRadius: '8px',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      backgroundColor: 'transparent'
    }}
    className="contact-link"
  >
    <FaPhone />
    <span>+91 9825077188</span>
  </a>
</p>
<p className="text-white text-decoration-none">
  <a 
    href="mailto:libraeventsdecorators@gmail.com" 
    style={{
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '1px 12px',
      borderRadius: '8px',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      backgroundColor: 'transparent'
    }}
    className="contact-link"
  >
    <FaEnvelope />
    <span>libraeventsdecorators@gmail.com</span>
  </a>
</p>
<p className="text-white text-decoration-none">
  <a 
    href="https://maps.app.goo.gl/Y1KVsH4M4XtVqoAb8 " 
    target="_blank" 
    rel="noopener noreferrer"
    style={{
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '1px 12px',
      borderRadius: '8px',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      backgroundColor: 'transparent'
    }}
    className="contact-link"
  >
    <FaMapMarkerAlt />
    <span>
      Basement, 1, Eva Mall Rd,<br/>
      near Saraswati Complex, <br/>
      Patidar Crossing, Manjalpur, 
      Vadodara, Gujarat 390011
    </span>
  </a>
</p>

          </div>
          
        </div>



        <div className="footer-center">
          <p>© 2025 Libra Events & Decoration</p>
          <p>
            <span className="footer-credit">Designed, Developed & Maintained by </span>
            <span className="footer-highlight"><a href="http://mark-digital.co.in/"><b>Mark Digital</b></a></span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
