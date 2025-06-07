import React, { useState } from 'react';
import '../CSS/Venue.css';
import Header from './Header';
import Footer from './Footer';
import bgImage from '../assets/bgImage.png';
import { FaUsers, FaParking, FaWifi, FaUtensils, FaMusic, FaCamera } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Contactbar from '../Components/ContactBar';
import AIChatBox from '../Components/AIChatBox'; 

const venues = [
  {
    id: 1,
    name: 'LIBRA BANQUET HALL',
    capacity: '500 Guests',
    price: '₹50,000',
    image: 'https://www.jyoti.events/assets/images/event/eva_naquet_4.jpg',
    features: [
      { icon: <FaUsers />, text: '500 Guest Capacity' },
      { icon: <FaParking />, text: 'Valet Parking' },
      { icon: <FaWifi />, text: 'High-Speed WiFi' },
      { icon: <FaUtensils />, text: 'Premium Catering' },
      { icon: <FaMusic />, text: 'Sound System' },
      { icon: <FaCamera />, text: 'Photo Zones' }
    ],
    description: 'Experience luxury in our grand Royal Palace venue. Perfect for large weddings and corporate events with state-of-the-art facilities.'
  },
  {
    id: 2,
    name: 'EVA BANQUET HALL',
    capacity: '300 Guests',
    price: '₹35,000',
    image: 'https://www.jyoti.events/assets/images/event/old_airport_1.jpeg',
    features: [
      { icon: <FaUsers />, text: '300 Guest Capacity' },
      { icon: <FaParking />, text: 'Free Parking' },
      { icon: <FaWifi />, text: 'WiFi Available' },
      { icon: <FaUtensils />, text: 'Custom Menu' },
      { icon: <FaMusic />, text: 'DJ Setup' },
      { icon: <FaCamera />, text: 'Photo Booth' }
    ],
    description: 'An elegant space perfect for medium-sized gatherings. Features modern amenities and beautiful decor options.'
  },
  {
    id: 3,
    name: 'Marigold Grandeur',
    capacity: '200 Guests',
    price: '₹25,000',
    image: 'https://www.jyoti.events/assets/images/event/exp_1.jpeg',
    features: [
      { icon: <FaUsers />, text: '200 Guest Capacity' },
      { icon: <FaParking />, text: 'Street Parking' },
      { icon: <FaWifi />, text: 'Basic WiFi' },
      { icon: <FaUtensils />, text: 'Standard Menu' },
      { icon: <FaMusic />, text: 'Basic Sound' },
      { icon: <FaCamera />, text: 'Photo Spots' }
    ],
    description: 'A cozy venue ideal for intimate gatherings and small celebrations. Warm atmosphere with essential amenities.'
  }
];

const Venue = () => {
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const message = `*Venue Booking Request*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`;
  
    const phoneNumber = '919909254684'; // 🔁 Replace with your WhatsApp number (with country code)
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    window.open(url, '_blank');
  
    setShowModal(false); // Close modal
    setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
  };

  return (
    <>
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
            <span className="about">Venues</span>
          </div>
        </div>
      </section>

      {/* Venue Selection Section */}
      <section className="venue-selection">
        <div className="venue-grid">
          {venues.map((venue) => (
            <div 
              key={venue.id} 
              className={`venue-card ${selectedVenue === venue.id ? 'selected' : ''}`}
              onClick={() => setSelectedVenue(venue.id)}
            >
              <div className="venue-image-container">
                <img src={venue.image} alt={venue.name} className="venue-image" />
                <div className="venue-text-overlay">
                  <h3>{venue.name}</h3>
                  <p>{venue.description}</p>
                </div>
              </div>
              <div className="venue-details">
                <div className="venue-features">
                  {venue.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-icon">{feature.icon}</span>
                      <span className="feature-text">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <div className="venue-hr"></div>
                <div className="venue-buttons">
                  <Link to={
                    venue.id === 1 ? '/LibraBanquetHall' :
                    venue.id === 2 ? '/eva-banquet' :
                    '/marigold-grandeur'
                  }>
                    <button className="venue-know-more-btn">Know More</button>
                  </Link>
                  <button className="venue-book-btn" onClick={() => setShowModal(true)}>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Section */}
      {showModal && (
  <div className="modal-overlay" onClick={() => setShowModal(false)}>
    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
      <h3>Book Now</h3>
      <form className="modal-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="tel"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
        <textarea
          placeholder="Message / Special Requests"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
        <div className="modal-actions">
          <button type="submit" className="submit-btn">Send</button>
          <button type="button" className="close-btn" onClick={() => setShowModal(false)}>Close</button>
        </div>
      </form>
    </div>
  </div>
)}


      {/* Venue Comparison Section */}
      <AIChatBox/>
      <Contactbar/>
      <Footer />
    </>
  );
};

export default Venue;
