import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
  { image: '/images/slide1.png', text: 'Trouvez des répétiteurs qualifiés pour vos enfants' },
  { image: '/images/slide2.png', text: 'Contactez facilement les répétiteurs' },
  { image: '/images/slide3.png', text: 'Améliorez les résultats scolaires de vos enfants' },
];

function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/home');
    }
  };

  return (
    <div className="onboarding-container">
      <img src={slides[currentSlide].image} alt="Onboarding" className="onboarding-image" />
      <p className="onboarding-text">{slides[currentSlide].text}</p>
      <button className="onboarding-button" onClick={nextSlide}>
        {currentSlide === slides.length - 1 ? 'Commencer' : 'Suivant'}
      </button>
    </div>
  );
}

export default OnboardingScreen;