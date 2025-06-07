import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Components/Header';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
// import SocialIcons from './Components/SocialIcons';
import Events from './Components/Events';
// import Corporate from './Components/Corporate';
// import Careers from './Components/Careers';
import Gallery from './Components/GallerySection';
// import BlogPosts from './Components/BlogPosts';
// import './Css/styles.css';
import ContactUS from './Components/ContactUS';
import Venues from './Components/Venue';
// import AIChatBox from './Components/AIChatBox';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contactus" element={<ContactUS />} />
            <Route path="/venues" element={<Venues />} />
            {/* <Route path="/aichat" element={<AIChatBox />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
