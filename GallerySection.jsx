import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/GallerySection.css";
import Header from "../Components/Header";
import bgImage from "../assets/bgImage.png";
import Contactbar from '../Components/ContactBar';

// Images
import venue1 from "../assets/jyoti.jpg";
import venue2 from "../assets/jyoti1.jpg";
import event from "../assets/jyoti2.jpg";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import weddin1 from "../assets/weddin1.jpg";
import weddin2 from "../assets/weddin2.jpg";
import weddin3 from "../assets/weddin3.jpg";
import weddin4 from "../assets/weddin4.jpg";
import weddin5 from "../assets/weddin5.jpg";
import Footer from "../Components/Footer";

const galleryData = [
  { category: "venue", src: venue1 },
  { category: "venue", src: venue2 },
  { category: "events", src: event },
  { category: "events", src: event1 },
  { category: "events", src: event2 },
  { category: "food", src: food1 },
  { category: "food", src: food2 },
  { category: "food", src: food3 },
  { category: "weddings", src: weddin1 },
  { category: "weddings", src: weddin2 },
  { category: "weddings", src: weddin3 },
  { category: "weddings", src: weddin4 },
  { category: "weddings", src: weddin5 },
];

const FilteredGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryData
      : galleryData.filter((img) => img.category === activeCategory);

  const categories = ["all", "venue", "events", "food", "weddings"];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="about-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="overlay container text-white text-center py-5">
          <p className="section-subtitle">ALL YOU NEED TO KNOW</p>
          <h1 className="section-title">
            <span className="highlight">LIBRA</span> EVENTS
          </h1>
          <div className="breadcrumbs mt-3">
            <a href="/" className="home-link">
              <span className="home">Home</span>
            </a>
            <span className="divider"> | </span>
            <span className="about">Gallery</span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <div className="gallery-section text-white">
        <div className="text-center py-5">
          <h1 className="gallery-title">Gallery</h1>
          <p className="gallery-description">
            Explore the vibrant gallery of LIBRA Banquets, showcasing stunning event setups, elegant decor, and memorable celebrations. Visit now!
          </p>
        </div>

        <div className="d-flex justify-content-center mb-4 category-tabs flex-wrap">
          {categories.map((cat) => (
            <div
              key={cat}
              className={`tab-item mx-2 ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.toUpperCase()}
            </div>
          ))}
        </div>

        <div className="container">
          <div className="row g-3">
            {filteredImages.map((img, idx) => (
              <div className="col-12 col-sm-6 col-md-4" key={idx}>
                <img
                  src={img.src}
                  alt={`${img.category}-${idx}`}
                  className="img-fluid gallery-img"
                  onClick={() => setSelectedImage(img.src)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
  <div
    className="modal-overlay"
    onClick={() => setSelectedImage(null)}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        maxWidth: "600px",
        width: "90%",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
      }}
    >
      <img
        src={selectedImage}
        alt="Enlarged"
        className="img-fluid"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      /><button
      onClick={() => setSelectedImage(null)}
      style={{
        position: "absolute",
        top: "20px",
        right: "30px",
        fontSize: "2rem",
        color: "#fff",
        background: "transparent",
        border: "none",
        cursor: "pointer",
      }}
    >
      &times;
    </button>
    
    </div>
  </div>
)}

<Contactbar />
<Footer/>

    </>
  );
};

export default FilteredGallery;
