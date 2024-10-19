import React from 'react';
import { Link } from 'react-router-dom';

const tutors = [
  { id: '1', name: 'Adama Ouédraogo', subject: 'Mathématiques', city: 'Ouagadougou', image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
  { id: '2', name: 'Mariam Kaboré', subject: 'Français', city: 'Bobo-Dioulasso', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
  { id: '3', name: 'Issouf Sawadogo', subject: 'Physique', city: 'Koudougou', image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
  { id: '4', name: 'Aminata Traoré', subject: 'Anglais', city: 'Banfora', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
];

function HomeScreen() {
  return (
    <div className="home-container">
      {tutors.map((tutor) => (
        <div key={tutor.id} className="tutor-card">
          <img src={tutor.image} alt={tutor.name} className="tutor-image" />
          <h3 className="tutor-name">{tutor.name}</h3>
          <p className="tutor-info">{tutor.subject} - {tutor.city}</p>
          <Link to={`/tutor/${tutor.id}`} className="contact-button">Voir le contact</Link>
        </div>
      ))}
    </div>
  );
}

export default HomeScreen;