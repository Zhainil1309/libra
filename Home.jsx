import React, { useEffect, useRef, useState } from 'react';
import '../CSS/Home.css';
import Header from '../Components/Header';
import Contactbar from '../Components/ContactBar';
import flower from '../assets/Untitled_design-removebg-preview.png.webp';
import wedding from '../assets/wedding.jpg';
import Footer from '../Components/Footer';

// import wedding1 from '../assets/wedding1.jpg';
// import wedding2 from '../assets/wedding2.jpg';
// import wedding3 from '../assets/wedding3.jpg';
// import wedding4 from '../assets/wedding4.jpg';
// import wedding5 from '../assets/wedding5.jpg';

import banquet1 from '../assets/jyoti1.jpg';
import banquet2 from '../assets/jyoti2.jpg';
import banquet3 from '../assets/jyoti3.jpg';
import banquet4 from '../assets/jyoti.jpg';
import { FaHandshake, FaMapMarkerAlt, FaPaintBrush, FaBirthdayCake, FaComments, FaLightbulb } from 'react-icons/fa';
// import Footer from '../Components/Footer';

const banquetImages = [banquet1, banquet2, banquet3,banquet4];

const loopImages = [
  { src: banquet1, name: 'Royal Palace' },
  { src: banquet2, name: 'Golden Fiesta' },
  { src: banquet3, name: 'Marigold Grandeur' },
];


function Home() {
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  // const loopImages = [...banquetImages, ...banquetImages];

  const sliderRef = useRef(null);
  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 520, // Adjust based on card width + margin
        behavior: 'smooth',
      });
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -520,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: <FaHandshake />, title: 'Friendly Team', desc: 'More than 200 members' },
    { icon: <FaMapMarkerAlt />, title: 'Perfact Venues', desc: 'Indoor & Outdoor' },
    { icon: <FaPaintBrush />, title: 'Unique Theme Decore', desc: 'We thinking out of the box' },
    { icon: <FaBirthdayCake />, title: 'Unforgettable Time', desc: 'We make you perfect event' },
    { icon: <FaComments />, title: 'Quick Support', desc: 'Instant channels' },
    { icon: <FaLightbulb />, title: 'Briliant Idea', desc: 'We have million idea' }
  ];

  const testimonials = [
    {
      name: 'Malav & Priya',
      text: 'Spectacular location, mind-blowing amazing concept. We loved our Stay Here, Beside the Ambience the Complete Hospitality of...',
      src: banquet1,
    },
    {
      name: 'Brian & Shruti',
      text: 'When we drove in, we were very impressed. We knew when they saw the entrance of...',
      src: banquet2,
    },
    {
      name: 'Aryan & Nidhi',
      text: 'A perfect setting and vibe. Truly memorable experience for all of us...',
      src: banquet3,
    },
  ];




  return (
    <>
      <div className="home-video-container">
        <Header />
        <video
          className="background-video"
          src="/videos/5032277-hd_1920_1080_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="home-content fade-in">
  <h1>Welcome to Libra Events & Decorator</h1>
  <p>Expert Wedding, Birthday & Corporate Event Planning</p>
</div>


        {/* Decorative flower line */}
        <div className="flower-divider">
          <div className="vertical-line" />
          <img src={flower} alt="flower" className="flower-icon" />
        </div>

        <Contactbar />
      </div>

      <div className="why-horizontal-row">
  <div className="why-text">
  <h4 class="golden-heading">We are <strong>Libra</strong> Events</h4>
    <h2><strong>Why</strong> Choose Us?</h2>
    <p>
      From creative conceptualization to exquisite execution, we take pride
      for being there for you at your each and every step.
    </p>
    <a href='/AboutUs'><button className="about-btn">About Libra Events</button></a>
  </div>

  <div className="why-cards">
    {/* Repeat or map your 6 cards here */}
    <div className="why-card">🎉 <h3>Creative Ideas</h3><p>We turn dreams into reality.</p></div>
    <div className="why-card">💡 <h3>Innovative Planning</h3><p>Custom experiences.</p></div>
    <div className="why-card">📍 <h3>Perfect Locations</h3><p>Magical venues.</p></div>
    <div className="why-card">👥 <h3>Team Support</h3><p>With you always.</p></div>
    <div className="why-card">🎊 <h3>Flawless Execution</h3><p>Every detail perfect.</p></div>
    <div className="why-card">🌟 <h3>Client Satisfaction</h3><p>Unforgettable memories.</p></div>
  </div>
</div>



      {/* ✅ Moved OUTSIDE home-video-container */}
      <div className="activities-section">
      <h2
        ref={titleRef}
        className={`activities-title ${isVisible ? 'animate' : ''}`}
      >
        Our Activities
      </h2><br></br>
  <div className="activities-carousel">
    <div className="carousel-track">
      {[...Array(2)].flatMap(() => (
        <>
          <div className="video-card">
            <img src={wedding} alt="Activity 1" className="activity-thumbnail" />
            <div className="play-button">&#9658;</div>
          </div>
          <div className="video-card">
            <img src={wedding} alt="Activity 2" className="activity-thumbnail" />
            <div className="play-button">&#9658;</div>
          </div>
          <div className="video-card">
            <img src={wedding} alt="Activity 3" className="activity-thumbnail" />
            <div className="play-button">&#9658;</div>
          </div>
        </>
      ))}
    </div>
  </div>
</div>

<div className="banquet-section">
<h2
  ref={titleRef}
  className={`activities-title ${isVisible ? 'animate-banquet' : ''}`}
>
  Banquets
</h2>

<div className="banquet-underline"></div>  {/* Underline element */}
<br />


  <div className="banquet-grid">
    {loopImages.slice(0, 3).map((img, index) => (
      <div className="banquet-slide" key={index}>
        <img src={img.src} alt={`Banquet ${index + 1}`} />
        <div className="banquet-overlay">{img.name}</div>
      </div>
    ))}
  </div>
</div>



<div className="cta-section">
  <h2 className="cta-title">
    Are You Ready To Make <strong>Your Own Special Events?</strong>
  </h2>
  <p className="cta-subtitle">
    “Get started now, Team <strong>Libra</strong> events is here to assist you.”
  </p>
</div>


{/* ✅ Testimonial Section with scroll button */}
<div className="testimonial-section">
  <div className="testimonial-heading">
    <h2
      ref={titleRef}
      className={`activities-title ${isVisible ? 'animate' : ''}`}
    >
      Our Clients Say
    </h2>
  </div>

  <div className="testimonial-main-card">
    <div className="testimonial-slider-wrapper" ref={sliderRef}>
      <div className="testimonial-slider-track">
        {[...testimonials, ...testimonials].map((item, index) => (
          <div
            className="testimonial-card"
            key={index}
            style={{
              backgroundImage: `url(${item.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              color: 'white', // to ensure text is visible
              borderRadius: '8px',
              overflow: 'hidden',
              minWidth: '300px',
              marginRight: '16px',
            }}
          >
            {/* Transparent overlay */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // black with 50% transparency
                zIndex: 1,
              }}
            ></div>

            {/* Content sits above overlay */}
            <div
              className="testimonial-content"
              style={{
                position: 'relative',
                zIndex: 2,
                padding: '20px',
              }}
            >
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* ⬅ Back Button */}
    <button className="prev-btn" onClick={scrollPrev}>‹</button>

    {/* ➡ Next Button */}
    <button className="next-btn" onClick={scrollNext}>›</button>
  </div>
</div>

<div className="banquet-full-width-section">
  <div className="banquet-intro-content">
    <h2 className="banquet-heading">Redefine Your Celebrations</h2>

    <p className="banquet-para">
      Libra Events & Decoration is a multipurpose venue specially designed to celebrate every occasion.
      Come create memories in the royal and plush interiors for all social gatherings, corporate event or more.
      Libra caters to all unique requirements of people and embodies the highest service values.
    </p>

    <p className="banquet-para">Welcome to the Libra family, the perfect place for all celebrations.</p>

    <p className="banquet-para">
    Libra Events & Decoration is a multipurpose venue specially designed to celebrate every occasion.
      Come create memories in the royal and plush interiors for all social gatherings, corporate event or more.
      Libra caters to all unique requirements of people and embodies the highest service values.
    </p>

    <p className="banquet-para">Welcome to the Libra family, the perfect place for all celebrations.</p>
  </div>
</div>


<div className="map-area">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.130874232507!2d73.18579307427751!3d22.27303174388519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5dc2bde1cfd%3A0xa435e654a2557c24!2sEva%20Banquet!5e0!3m2!1sen!2sin!4v1748431747093!5m2!1sen!2sin"width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                title="Google Map Location"></iframe>
              </div>
<Footer/>

    </>
  );
}

export default Home;
