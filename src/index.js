import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Hero from './PageSections/HeroSection/Hero';
import Intro from './PageSections/IntroSection/Intro';
import Events from './PageSections/EventsSection/Events';
import Gallery from './PageSections/GallerySection/Gallery';
import SignupForm from './Forms/SignupForm/SignupForm';
import Menu from './PageSections/MenuSection/Menu/Menu';
import Contact from './PageSections/ContactSection/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <Hero />
    </header>
    <main>
      <Intro />
      <Events />
      <Gallery />
    </main>
    <aside>
      <SignupForm />
    </aside>
    <footer>
      <Menu />
      <Contact />
    </footer>
  </React.StrictMode>
);
