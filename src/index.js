import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Hero from './PageSections/HeroSection/Hero';
import Intro from './PageSections/IntroSection/Intro';
import Events from './PageSections/EventsSection/Events';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <Hero />
    </header>
    <main>
      <Intro />
      <Events />
    </main>
  </React.StrictMode>
);
