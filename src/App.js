// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home.js';
import Contact from './components/contact.js';
import About from './components/about.js';
import Navigation from './components/navigation.js';
import './App.css';
import Card from './components/card';

import hillbillyTomato from './images/hillbilly_tomato.png';


const App = () => {
  return (
    <Router>
      <h1>HEIRLOOM TOMATOES</h1>
      <p>Here is some text that I need</p>
      <div className="card-container">
        <Card
          image={hillbillyTomato}
          title="HillBilly Tomato"
          subtitle="Organic Vegetable Seeds"
        />

        <Card
          image={hillbillyTomato}
          title="Card Title 2"
          subtitle="This is the subtitle for card 2."
        />

        <Card
          image="https://via.placeholder.com/300"
          title="Card Title 3"
          subtitle="This is the subtitle for card 3."
        />

        <Card
          image="https://via.placeholder.com/300"
          title="Card Title 3"
          subtitle="This is the subtitle for card 3."
        />

        <Card
          image="https://via.placeholder.com/300"
          title="Card Title 3"
          subtitle="This is the subtitle for card 3."
        />

        <Card
          image="https://via.placeholder.com/300"
          title="Card Title 3"
          subtitle="This is the subtitle for card 3."
        />

        <Card
          image="https://via.placeholder.com/300"
          title="Card Title 3"
          subtitle="This is the subtitle for card 3."
        />

        <Card
          image="https://via.placeholder.com/300"
          title="Another tomato"
          subtitle="This is the subtitle for card 3."
        />

        <Card
          image="https://via.placeholder.com/300"
          title="Card Title 3"
          subtitle="This is the subtitle for card 3."
        />

      </div>

      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
