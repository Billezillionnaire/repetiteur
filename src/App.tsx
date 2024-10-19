import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import OnboardingScreen from './components/OnboardingScreen';
import HomeScreen from './components/HomeScreen';
import TutorDetailsScreen from './components/TutorDetailsScreen';
import TutorRegistrationScreen from './components/TutorRegistrationScreen';
import SearchScreen from './components/SearchScreen';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<OnboardingScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/tutor/:tutorId" element={<TutorDetailsScreen />} />
        <Route path="/register" element={<TutorRegistrationScreen />} />
        <Route path="/search" element={<SearchScreen />} />
      </Routes>
    </Router>
  );
}

export default App;