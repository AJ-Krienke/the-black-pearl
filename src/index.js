import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './index.css';

import LandingPage from './LandingPage';
import MemberPage from './MemberPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<LandingPage />}
        />
        <Route
          path='/member'
          element={<MemberPage />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
