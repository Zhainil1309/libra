// ContactUS.jsx
import React from 'react';
import '../CSS/ContactUS.css';
import Header from './Header';
import Footer from './Footer';
// import ContactHeaderImg from '../assets/ContactHeaderImg.jpeg';
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane,FaClock,FaEnvelope   } from "react-icons/fa";
// import { FaPhoneAlt,FaMapMarkerAlt  } from 'react-icons/fa';
import bgImage from '../assets/bgImage.png'; 
import Contactbar from '../Components/ContactBar';

const ContactUS = () => {
  return (
    <div className="contact-page">
      <Header />

      <section
        className="about-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="overlay container">
          <p className="section-subtitle">ALL YOU NEED TO KNOW</p>

          <h1 className="section-title">
            <span className="highlight">LIBRA</span> EVENTS
          </h1>

          <div className="breadcrumbs mt-3">
          <a href='/' className="home-link">
  <span className="home">Home</span>
</a>

            <span className="divider"> | </span>
            <span className="about">Contact Us</span>
          </div>
        </div>
      </section>


{/* Get In Touch Cards */}
<section className="get-in-touch-section">
  <div className="container text-center">
    <h2 className="form-title">Keep in touch with Libra</h2>
    <div className="row my-5">
      <div className="col-md-3 mb-4">
        <div className="get-in-touch-card text-center">
          <FaMapMarkerAlt className="icon mb-3" />
          <h5>Address:</h5>
          <p>Basement, 1, Eva Mall Rd,<br/>
      near Saraswati Complex, <br/>
      Patidar Crossing, Manjalpur, 
      Vadodara, Gujarat 390011</p>
        </div>
      </div>
      <div className="col-md-3 mb-4">
        <div className="get-in-touch-card text-center">
          <FaPhoneAlt className="icon mb-3" />
          <h5>Phone:</h5>
          <p>+91 9909254684</p>
        </div>
      </div>
      <div className="col-md-3 mb-4">
        <div className="get-in-touch-card text-center">
          <FaPaperPlane className="icon mb-3" />
          <h5>Email:</h5>
          <p>libraeventsdecorators@gmail.com</p>
        </div>
      </div>
      <div className="col-md-3 mb-4">
        <div className="get-in-touch-card text-center">
          <FaClock className="icon mb-3" />
          <h5>Timing:</h5>
          <p>Mon – Sun<br />11:00 AM – 07:00 PM</p>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="contact-main-section">
  <div className="container py-5">
  <h2 className="text-center contact-heading mb-3">Contact Us</h2>
<p className=" mb-5">
Have questions or planning something special? <strong>Libra Events</strong> is here to turn your dreams into reality.
Whether it's an elegant wedding, a lively birthday bash, or a corporate gathering, our expert team is ready to bring your vision to life with creativity and precision.
<br /><br />
  <strong>Reach out today — let’s create unforgettable moments together, tailored uniquely for you.</strong>

</p>

    <div className="row">
      {/* Left - Contact Info */}
      <div className="col-md-6 mb-4">
  {/* Address */}
  <div className="contact-info d-flex align-items-start mb-4">
    <div className="contact-icon-wrapper me-3">
      <FaMapMarkerAlt className="contact-icon" />
    </div>
    <div>
      <h5 className="contact-label">Address</h5>
      <p className="contact-value mb-0">
      Basement, 1, Eva Mall Rd,<br/>
      near Saraswati Complex, <br/>
      Patidar Crossing, Manjalpur, 
      Vadodara, Gujarat 390011
      </p>
    </div>
  </div>

  {/* Phone */}
  <div className="contact-info d-flex align-items-start mb-4">
    <div className="contact-icon-wrapper me-3">
      <FaPhoneAlt className="contact-icon" />
    </div>
    <div>
      <h5 className="contact-label">Phone</h5>
      <p className="contact-value mb-0">+91 9909254684</p>
    </div>
  </div>

  {/* Email */}
  <div className="contact-info d-flex align-items-start mb-4">
    <div className="contact-icon-wrapper me-3">
      <FaEnvelope className="contact-icon" />
    </div>
    <div>
      <h5 className="contact-label">Email</h5>
      <p className="contact-value mb-0">libraeventsdecorators@gmail.com</p>
    </div>
  </div>

  {/* Timing */}
  <div className="contact-info d-flex align-items-start">
    <div className="contact-icon-wrapper me-3">
      <FaClock className="contact-icon" />
    </div>
    <div>
      <h5 className="contact-label">Timings</h5>
      <p className="contact-value mb-0">Monday – Sunday<br />11:00 AM – 07:00 PM</p>
    </div>
  </div>
</div>


      {/* Right - Contact Form */}
      <div className="col-md-6">
  <div className="glass-form animated-form p-4">
    <h5 className="form-title mb-4 fw-bold text-light">Send Message</h5>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const phone = e.target[2].value;
        const message = e.target[3].value;

        const fullMessage = `👤 Name: ${name}\n📧 Email: ${email}\n📱 Phone: ${phone}\n📝 Message: ${message}`;
        const encodedMessage = encodeURIComponent(fullMessage);
        const whatsappNumber = "919909254684";

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
      }}
    >
      <div className="mb-3">
        <input type="text" className="form-control glass-input" placeholder="Your Name" required />
      </div>
      <div className="mb-3">
        <input type="email" className="form-control glass-input" placeholder="Your Email" required />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control glass-input" placeholder="Contact Number" required />
      </div>
      <div className="mb-3">
        <textarea className="form-control glass-input" placeholder="Type your Message..." rows="4" required></textarea>
      </div>
      <button type="submit" className="btn btn-silver w-100 fw-semibold">
        Send Message 
      </button>
    </form>
  </div>
</div>

    </div>
  </div>
</section>






              <div className="map-area">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.130874232507!2d73.18579307427751!3d22.27303174388519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5dc2bde1cfd%3A0xa435e654a2557c24!2sEva%20Banquet!5e0!3m2!1sen!2sin!4v1748431747093!5m2!1sen!2sin"width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                title="Google Map Location"></iframe>
              </div>

              <Contactbar />
      <Footer />
    </div>
  );
};

export default ContactUS;
