import React from 'react';
import './Home.css';
import heroImage from '../assets/clg.jpeg';

const Home = () => {
  return (
    <div className="home">
      <img src={heroImage} alt="Hero" className="clg.jpeg" />
      <div className="hero-text">
        <h1>Saveetha Engineering College</h1>
        <p>Welcome to our college</p>
      </div>
    </div>
  );
};

export default Home;