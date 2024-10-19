import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import OrangeMoneyPayment from './OrangeMoneyPayment';

function TutorDetailsScreen() {
  const { tutorId } = useParams();
  const [showPayment, setShowPayment] = useState(false);

  // Simuler la récupération des détails du répétiteur
  const tutor = {
    id: tutorId,
    name: 'Jean Dupont',
    subject: 'Mathématiques',
    city: 'Paris',
    image: '/images/tutor1.jpg',
    description: 'Professeur expérimenté avec 10 ans d\'expérience dans l\'enseignement des mathématiques.',
    phone: '06 12 34 56 78',
  };

  const handleShowContact = () => {
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    // Ici, vous pouvez ajouter la logique pour afficher le numéro de téléphone
  };

  return (
    <div className="tutor-details-container">
      <img src={tutor.image} alt={tutor.name} className="tutor-image" />
      <h2 className="tutor-name">{tutor.name}</h2>
      <p className="tutor-info">{tutor.subject} - {tutor.city}</p>
      <p className="tutor-description">{tutor.description}</p>
      {!showPayment ? (
        <button className="contact-button" onClick={handleShowContact}>
          Voir le contact
        </button>
      ) : (
        <OrangeMoneyPayment onSuccess={handlePaymentSuccess} />
      )}
    </div>
  );
}

export default TutorDetailsScreen;