import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Welcome.css';
import caveImage from '../images/cave.jpeg';
import geminiArtImage from '../images/geminiart.jpeg';
import monaLisaImage from '../images/astronaut...jpeg';
import imh1 from '../images/vintagecar.jpeg';


function Welcome() {
  const images = [caveImage, geminiArtImage, monaLisaImage,imh1];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,        // 1 second per slide
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 3 seconds per slide
  };

  return (
    <div className="welcome-container">
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index} className="slider-image">
            <img src={image} alt={`Image ${index + 1}`} className="image-thumbnail" />
          </div>
        ))}
      </Slider>
      <h1 className="welcome-title">Welcome to ArtifyAI</h1>
      <p className="welcome-text">Please login to get started.</p>
      <Link to="/login" className="login-button">Login</Link>
    </div>
  );
}

export default Welcome;
