import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TutorRegistrationScreen() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous devriez implémenter la logique pour enregistrer le nouveau répétiteur
    console.log('Nouveau répétiteur enregistré:', { name, subject, city, phone, description });
    navigate('/home');
  };

  return (
    <form className="registration-form" onSubmit={handleRegistration}>
      <input
        type="text"
        placeholder="Nom complet"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Matière enseignée"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Ville"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Numéro de téléphone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <textarea
        placeholder="Description (expérience, méthodes d'enseignement, etc.)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit" className="register-button">S'inscrire comme répétiteur</button>
    </form>
  );
}

export default TutorRegistrationScreen;