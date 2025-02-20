import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import PublisherPage from './pages/PublisherPage';
import SubscriberPage from './pages/SubscriberPage';

function App() {
  const navigate = useNavigate();

  const handlePublisherClick = (roomId) => {
    navigate(`/publisher/${roomId}`);
  };

  const handleSubscriberClick = (roomId, pubId, pubPrivateId) => {
    navigate(`/subscriber/${roomId}/${pubId}/${pubPrivateId}`);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage onPublisherClick={handlePublisherClick} onSubscriberClick={handleSubscriberClick} />} />
        <Route path="/publisher/:roomId" element={<PublisherPage />} />
        <Route path="/subscriber/:roomId/:pubId/:pubPrivateId" element={<SubscriberPage />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}