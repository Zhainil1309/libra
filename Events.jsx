import React from "react";
import "../CSS/Events.css";
// import Slide from '../Components/Slidtext'
import Footer from "../Components/Footer";

import flowerImg from "../assets/event1.jpg";
import mandapImg from "../assets/event2.jpg";
import { FaDotCircle } from "react-icons/fa";
import Header from "../Components/Header";
import bgImage from "../assets/bgImage.png";
// import flower1 from "../assets/event1.jpg";
// import flower2 from "../assets/event2.jpg";
import Contactbar from '../Components/ContactBar';

const features = [
  "Lavish Feel",
  "One Stop Solution",
  "Theme Based Decoration",
  "Best Catering",
  "Selfie/ Group Photo Zone",
  "Parking Facility",
];


const features1 = [
  "Theme Based Decoration",
  "Selfie/ Group Photo Zone",
  "Parking Facility",
  "One Stop Solution",
  "Any Size Pax",
];


const Events = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
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
            <span className="about">Events</span>
          </div>
        </div>
      </section>

      <div className="libra-welcome animated-section text-center">
  <h2 className="welcome-heading">
    Welcome to <span className="highlight">Libra Events</span>
  </h2>
  <p className="welcome-subtext">
    Where your celebrations come to life with creativity, elegance, and precision. Let us craft unforgettable memories tailored just for you.
  </p>
</div>



      {/* Content Section */}
      <section className="events-content container py-5">
        <div className="row align-items-center g-5">
          {/* Image Column */}
          <div className="col-lg-5 col-md-6 position-relative">
            <img src={flowerImg} alt="Backdrop" className="img-fluid rounded shadow main-img" />
            <img src={mandapImg} alt="Mandap" className="img-fluid rounded shadow overlay-img position-absolute" />
          </div>

          {/* Text Column */}
          <div className="col-lg-7 col-md-6">
            <h3 className="events-content__heading fw-bold fs-2">
              Wedding <span className="text-highlight">Ceremony</span>
            </h3>
            <p className="events-content__venue text-pink mb-3 fw-semibold fs-5">
              Outdoor Venues
            </p>
            <hr />
            <p className="events-content__description text-muted fs-5">
              Since time immortals, weddings have created emotional, memorable environments.
              A once-in-a-lifetime event – a marriage – is blended with grandeur at Libra Events.
              We provide comprehensive solutions for elaborate Indian weddings with professional care and attention.
              Our multiple location options and unique themes make your special day magical and unforgettable.
            </p>

            {/* Feature List */}
            <div className="row mt-4">
              {features.map((feature, idx) => (
                <div
                  className="col-sm-6 mb-2 d-flex align-items-center"
                  key={idx}
                >
                  <FaDotCircle className="text-pink me-2 fs-5" />
                  <span className="events-content__feature text-dark small-text fw-semibold">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            {/* Bottom Buttons Section */}
<section className="events-buttons-section py-5">
  <div className="container text-center">
  <a href="/gallery" className="me-3 text-decoration-none">
  <button className="btn btn-outline-dark px-4 py-2 fw-semibold mb-3">
    View Gallery
  </button>
</a>

<a
  href="https://wa.me/919909254684?text=I%20want%20to%20book%20a%20wedding%20event"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-pink px-4 py-2 fw-semibold mb-3"
>
  Book Now
</a>


  </div>
</section>

          </div>
        </div>

      </section>

      <section className="events-content container py-5">
        <div className="row align-items-center g-5">
          {/* Image Column */}
          <div className="col-lg-5 col-md-6 position-relative">
            <img src={flowerImg} alt="Backdrop" className="img-fluid rounded shadow main-img" />
            <img src={mandapImg} alt="Mandap" className="img-fluid rounded shadow overlay-img position-absolute" />
          </div>

          {/* Text Column */}
          <div className="col-lg-7 col-md-6">
            <h3 className="events-content__heading fw-bold fs-2">
            Engagement <span className="text-highlight">Ceremony</span>
            </h3>
            <p className="events-content__venue text-pink mb-3 fw-semibold fs-5">
            Outdoor Venues
            </p>
            <hr />
            <p className="events-content__description text-muted fs-5">
            To furnish the ever-growing desires of our clientele in the best possible manner,
            we have been offering Engagement services. These are imparted by the team of an
            experienced team of planners and executors at Libra Creations. We try to deliver
            much more than you expect. We try to make each and every moment special for you.
            </p>

            {/* Feature List */}
            <div className="row mt-4">
              {features1.map((features1, idx) => (
                <div
                  className="col-sm-6 mb-2 d-flex align-items-center"
                  key={idx}
                >
                  <FaDotCircle className="text-pink me-2 fs-5" />
                  <span className="events-content__feature text-dark small-text fw-semibold">
                    {features1}
                  </span>
                </div>
              ))}
            </div>
            {/* Bottom Buttons Section */}
<section className="events-buttons-section py-5">
  <div className="container text-center">
  <a href="/gallery" className="me-3 text-decoration-none">
  <button className="btn btn-outline-dark px-4 py-2 fw-semibold mb-3">
    View Gallery
  </button>
</a>

<a
  href="https://wa.me/919909254684?text=I%20want%20to%20book%20a%20Engagement%20event"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-pink px-4 py-2 fw-semibold mb-3"
>
  Book Now
</a>


  </div>
</section>

          </div>
        </div>

      </section>

      <section className="events-content container py-5">
        <div className="row align-items-center g-5">
          {/* Image Column */}
          <div className="col-lg-5 col-md-6 position-relative">
            <img src={flowerImg} alt="Backdrop" className="img-fluid rounded shadow main-img" />
            <img src={mandapImg} alt="Mandap" className="img-fluid rounded shadow overlay-img position-absolute" />
          </div>

          {/* Text Column */}
          <div className="col-lg-7 col-md-6">
            <h3 className="events-content__heading fw-bold fs-2">
            Corporate <span className="text-highlight">Conferences & Meeting</span>
            </h3>
            <p className="events-content__venue text-pink mb-3 fw-semibold fs-5">
            Exclusive arrangement
            </p>
            <hr />
            <p className="events-content__description text-muted fs-5">
            Corporate Events are the best way to bring in a boost to their clients as well as employees. It helps them to maintain a good repo with clients as well as employees. When groups come together, the effort is appreciated, and the bonds between the industries get enlightened. We are a team of dedicated professionals who devote themselves to provide you with modern conferences and corporate events to bring out the best results leaving the audience amazed and excited for more. We provide our extensive conference support and entertainment services. As a responsible corporate event planner, we always thrive to deliver the best.
            </p>

            {/* Feature List */}
            <div className="row mt-4">
              {features1.map((features1, idx) => (
                <div
                  className="col-sm-6 mb-2 d-flex align-items-center"
                  key={idx}
                >
                  <FaDotCircle className="text-pink me-2 fs-5" />
                  <span className="events-content__feature text-dark small-text fw-semibold">
                    {features1}
                  </span>
                </div>
              ))}
            </div>
            {/* Bottom Buttons Section */}
<section className="events-buttons-section py-5">
  <div className="container text-center">
  <a href="/gallery" className="me-3 text-decoration-none">
  <button className="btn btn-outline-dark px-4 py-2 fw-semibold mb-3">
    View Gallery
  </button>
</a>

<a
  href="https://wa.me/919909254684?text=I%20want%20to%20book%20a%20Corporate%20Conference%20%26%20Meeting"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-pink px-4 py-2 fw-semibold mb-3"
>
  Book Now
</a>


  </div>
</section>

          </div>
        </div>

      </section>


      <section className="events-content container py-5">
        <div className="row align-items-center g-5">
          {/* Image Column */}
          <div className="col-lg-5 col-md-6 position-relative">
            <img src={flowerImg} alt="Backdrop" className="img-fluid rounded shadow main-img" />
            <img src={mandapImg} alt="Mandap" className="img-fluid rounded shadow overlay-img position-absolute" />
          </div>

          {/* Text Column */}
          <div className="col-lg-7 col-md-6">
            <h3 className="events-content__heading fw-bold fs-2">
            Reception <span className="text-highlight">Ceremony</span>
            </h3>
            <p className="events-content__venue text-pink mb-3 fw-semibold fs-5">
            A Grand Celebration of Togetherness
            </p>
            <hr />
            <p className="events-content__description text-muted fs-5">
            At Libra Events, we redefine post-wedding celebrations with unmatched elegance and personalized experiences.
        The Reception Ceremony is your moment to shine, to celebrate love with grandeur, and to host guests in a stunning ambiance.
        From luxurious decor and artistic lighting to a curated menu and warm hospitality — every detail is thoughtfully crafted to reflect your story.
        Let us turn your first celebration as a married couple into a magical memory.
            </p>

            {/* Feature List */}
            <div className="row mt-4">
        {[
          "Custom Theme Decor",
          "Live Music & DJ Setup",
          "Gourmet Catering Options",
          "Grand Couple Entry",
          "Photobooth Corners",
          "Seamless Coordination",
        ].map((item, i) => (
          <div key={i} className="col-md-6 mb-2 d-flex align-items-center">
            <FaDotCircle className="text-pink me-2 fs-5" />
            <span className="fw-semibold text-dark small-text">{item}</span>
          </div>
        ))}
      </div>
            {/* Bottom Buttons Section */}
<section className="events-buttons-section py-5">
  <div className="container text-center">
  <a href="/gallery" className="me-3 text-decoration-none">
  <button className="btn btn-outline-dark px-4 py-2 fw-semibold mb-3">
    View Gallery
  </button>
</a>

<a
  href="https://wa.me/919909254684?text=I%20want%20to%20book%20a%20Reception%20event"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-pink px-4 py-2 fw-semibold mb-3"
>
  Book Now
</a>

  </div>
</section>

          </div>
        </div>

      </section>


      <section className="events-content container py-5">
        <div className="row align-items-center g-5">
          {/* Image Column */}
          <div className="col-lg-5 col-md-6 position-relative">
            <img src={flowerImg} alt="Backdrop" className="img-fluid rounded shadow main-img" />
            <img src={mandapImg} alt="Mandap" className="img-fluid rounded shadow overlay-img position-absolute" />
          </div>

          {/* Text Column */}
          <div className="col-lg-7 col-md-6">
            <h3 className="events-content__heading fw-bold fs-2">
            Sangeet <span className="text-highlight">Ceremony</span>
            </h3>
            <p className="events-content__venue text-pink mb-3 fw-semibold fs-5">
            A Night of Music, Dance & Celebration
            </p>
            <hr />
            <p className="events-content__description text-muted fs-5">
            The Sangeet Ceremony is a symphony of joy, music, and heartfelt moves. At Libra Events, we orchestrate the perfect stage for an evening where families come together in rhythm and rejoice.
        From dazzling stage setups to curated lighting, DJ arrangements, and professional choreography — we make every beat count.
        Whether you're planning an intimate gathering or a grand musical fest, our team ensures the vibe is high and hearts are full.
            </p>

            {/* Feature List */}
            <div className="row mt-4">
        {[
          "Stage & Light Setup",
          "Sound & DJ Arrangements",
          "LED Dance Floor",
          "Customized Couple Entry",
          "Live Performers & Hosts",
          "Dance Choreography Services",
        ].map((item, i) => (
          <div key={i} className="col-md-6 mb-2 d-flex align-items-center">
            <FaDotCircle className="text-pink me-2 fs-5" />
            <span className="fw-semibold text-dark small-text">{item}</span>
          </div>
        ))}
      </div>
            {/* Bottom Buttons Section */}
<section className="events-buttons-section py-5">
  <div className="container text-center">
  <a href="/gallery" className="me-3 text-decoration-none">
  <button className="btn btn-outline-dark px-4 py-2 fw-semibold mb-3">
    View Gallery
  </button>
</a>

<a
  href="https://wa.me/919909254684?text=I%20want%20to%20book%20a%20Sangeet%20event"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-pink px-4 py-2 fw-semibold mb-3"
>
  Book Now
</a>

  </div>
</section>

          </div>
        </div>

      </section>

      <section className="events-content container py-5">
        <div className="row align-items-center g-5">
          {/* Image Column */}
          <div className="col-lg-5 col-md-6 position-relative">
            <img src={flowerImg} alt="Backdrop" className="img-fluid rounded shadow main-img" />
            <img src={mandapImg} alt="Mandap" className="img-fluid rounded shadow overlay-img position-absolute" />
          </div>

          {/* Text Column */}
          <div className="col-lg-7 col-md-6">
            <h3 className="events-content__heading fw-bold fs-2">
            Outdoor <span className="text-highlight">Decoration</span>
            </h3>
            <p className="events-content__venue text-pink mb-3 fw-semibold fs-5">
            Nature-Inspired Elegance for Your Big Day
            </p>
            <hr />
            <p className="events-content__description text-muted fs-5">
            Embrace the charm of open skies and natural landscapes with our Outdoor Decoration services.
        Whether it's a serene garden or a beachfront celebration, we specialize in crafting ethereal setups that blend seamlessly with the outdoors.
        From floral installations and draped canopies to ambient lighting and rustic furniture, every element is curated to create a romantic and picturesque experience.
        Let the beauty of nature elevate your event.
            </p>

            {/* Feature List */}
            <div className="row mt-4">
        {[
          "Floral Arches & Aisles",
          "Canopy & Tent Draping",
          "Ambient Fairy Lighting",
          "Rustic Seating Arrangements",
          "Garden-Themed Backdrops",
          "Eco-Friendly Elements",
        ].map((item, i) => (
          <div key={i} className="col-md-6 mb-2 d-flex align-items-center">
            <FaDotCircle className="text-pink me-2 fs-5" />
            <span className="fw-semibold text-dark small-text">{item}</span>
          </div>
        ))}
      </div>
            {/* Bottom Buttons Section */}
<section className="events-buttons-section py-5">
  <div className="container text-center">
  <a href="/gallery" className="me-3 text-decoration-none">
  <button className="btn btn-outline-dark px-4 py-2 fw-semibold mb-3">
    View Gallery
  </button>
</a>

<a
  href="https://wa.me/919909254684?text=I%20want%20to%20book%20a%20Outdoor%20Decoration"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-pink px-4 py-2 fw-semibold mb-3"
>
  Book Now
</a>

  </div>
</section>

          </div>
        </div>

      </section>
      <Contactbar />
<Footer/>
    </>
  );
};

export default Events;
