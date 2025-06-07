import React from 'react';
import '../CSS/AboutUs.css';
import Header from '../Components/Header';
import bgImage from '../assets/bgImage.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineCelebration } from "react-icons/md";
import glory from "../assets/glory.png"
import Footer from '../Components/Footer';
import Contactbar from '../Components/ContactBar'; 

import { FaHandshake, FaWineGlassAlt, FaPhoneAlt, FaBirthdayCake, FaSun, FaCalendarAlt, FaUsers,FaHotel, FaTools, FaConciergeBell, FaSlidersH } from 'react-icons/fa';

const advantages = [
  {
    icon: <FaHandshake />,
    title: 'Friendly Team',
    subtitle: 'More Than 200 Teams',
  },
  {
    icon: <FaWineGlassAlt />,
    title: 'Unique Scenario',
    subtitle: 'We Thinking Out Of The Box',
  },
  {
    icon: <FaPhoneAlt />,
    title: '24/7 Hours Support',
    subtitle: 'Anitime Anywhere',
  },
  {
    icon: <FaBirthdayCake />,
    title: 'Celebrations',
    subtitle: 'Stylish Events',
  },
  {
    icon: <FaSun />,
    title: 'Sunny Outdoor',
    subtitle: 'Enjoy Natural Light',
  },
  {
    icon: <FaCalendarAlt />,
    title: 'Event Planning',
    subtitle: 'From Start To Finish',
  },
  {
    icon: <FaUsers />,
    title: 'Experienced Staff',
    subtitle: 'Professional Team',
  },
  {
    icon: <MdOutlineCelebration />,
    title: 'Perfact Venues',
    subtitle: 'Perfact Venues',
  },
];

const About = () => {
  return (
    <div>
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
            <span className="about">About Us</span>
          </div>
        </div>
      </section>


      <section className="jyoti-celebration-section py-5">
  <div className="jyoti-container">
    <div className="jyoti-row">
      {/* Left Column */}
      <div className="jyoti-col-md-4 jyoti-mb-4">
      <p className="jyoti-section-subtitle" style={{color:"#f5d28e"}}>WE ARE LIBRA EVENTS</p>

        <h2 className="jyoti-section-title">
          We Make<br />
          Celebration Joyous
        </h2>
        <a href="/ContactUs">
  <button className="jyoti-gradient-btn mt-3">ASK MORE!</button>
</a>

      </div>

      {/* Center Column */}
      <div className="jyoti-col-md-4 jyoti-mb-4">
        <h4 className="jyoti-heading-underline">When We Started</h4>
        <p>
          With an impeccable lineage of 26 years at Libra Decorations from 1979, and with the vision of Niraj Majmudar, Libra Events was founded in 2004.
          It gave us the exclusive advantage of possessing the dynamics required to make each and every event celebration truly memorable.
        </p>
        <p>
          <strong><em>We understand that in your dreams, every detail matters, therefore our motto is to provide an exceptional experience every time.</em></strong>
        </p>
      </div>

      {/* Right Column */}
      <div className="jyoti-col-md-4 jyoti-mb-4">
        <h4 className="jyoti-heading-underline">Today We Are</h4>
        <p>
          We have delivered 2000+ phenomenal wedding and corporate event experiences over the last two decades and are now poised to chart out a whole new growth story.
        </p>
        <p>
          <strong><em>
            Insightful individuals across India have trusted us with their event planning and we have managed some of the most reputed weddings.
          </em></strong>
        </p>
      </div>
    </div>
  </div>
</section>

<div className="advantages-section py-3">
  <div className="container">
  <div style={{ width: '60px', borderTop: '3px solid rgb(234, 250, 7)', marginBottom: '0.5rem' }}></div>

<p className="custom-subtitle mb-1 fs-4">
  Why Choose Us
</p>

<h2 className="fw-bold mb-4 custom-heading display-4">
  Libra <span>Advantages</span>
</h2>


<div className="row">
  {advantages.map((adv, index) => (
    <div key={index} className="col-6 col-md-3 mb-4 d-flex">
      <div className="advantage-box text-center p-3 border rounded shadow-sm w-100 d-flex flex-column justify-content-between">
        <div>
          <div className="icon mb-3 text-pink fs-2">{adv.icon}</div>
          <h6 className="fw-bold">{adv.title}</h6>
          <p className="text-muted small">{adv.subtitle}</p>
        </div>
      </div>
    </div>
  ))}
</div>

  </div>
</div>


<div className="container-fluid celebration-section">
      <div className="row align-items-center">
        <div className="col-lg-6 celebration-image mb-4 mb-lg-0">
          <img
            src={glory} // replace with actual path
            alt="Celebration Hall"
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="celebration-title">Celebrations Galore</h2>
          <p className="celebration-text">
            Libra in Vadodara is the most prestigious and elegant address with stunning banquets and open lawns accommodating every kind of celebration. The peaceful and serene ambience is aesthetically designed to give luxury &amp; comfort.
          </p>
          <p className="celebration-text">
            You can choose to revitalize your occasion overlooking the glorious green or in the glamour of the banquet rooms offering a contemporary artistic edge.
          </p>
          <p className="celebration-text">
            Come experience the flawless execution of your perfect day!
          </p>
          <p className="celebration-text">
            All rights reserved with Shivshailam Developers<br/>
            We have Moroccan themed rooms and you can choose to revitalize your occasion.
          </p>
          <p className="celebration-text">
            We care for nature lovers and thus have extensive lawns over the property to make your outdoor event just as ideal as your mind’s eye.
          </p>
        </div>
      </div>
    </div>

    <section className="features-section">
      <div className="wave-top"></div>
      <div className="container text-center py-5">
        <h2 className="features-heading mb-5">A Space That Elevates Every Occasion</h2>
        <div className="row justify-content-center">
          <div className="col-6 col-md-4 col-lg-2 feature-box">
            <FaHotel className="feature-icon" />
            <h5>Spacious Halls</h5>
            <p>Accommodating up to 1000 guests in style and comfort.</p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 feature-box">
            <FaTools className="feature-icon" />
            <h5>Modern Amenities</h5>
            <p>Fully air-conditioned spaces, lighting, and audio-visual support.</p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 feature-box">
            <FaConciergeBell className="feature-icon" />
            <h5>In-House Catering</h5>
            <p>Expert chefs creating menus tailored to your tastes.</p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 feature-box">
            <FaSlidersH className="feature-icon" />
            <h5>Flexible Packages</h5>
            <p>Customized options to meet your unique event needs.</p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 feature-box">
            <FaCalendarAlt className="feature-icon" />
            <h5>Expert Event Management</h5>
            <p>Professional planning and execution from start to finish.</p>
          </div>
        </div>
      </div>
    </section>


    <Contactbar />
<Footer/>
    </div>
  );
};

export default About;
