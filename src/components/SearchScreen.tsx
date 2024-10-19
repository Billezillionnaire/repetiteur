import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler une recherche de répétiteurs
    const mockResults = [
      { id: '3', name: 'Pierre Durand', subject: 'Physique', city: 'Marseille' },
      { id: '4', name: 'Sophie Lefebvre', subject: 'Chimie', city: 'Bordeaux' },
    ];
    setSearchResults(mockResults);
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Rechercher une matière"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
      <div className="search-results">
        {searchResults.map((tutor) => (
          <div key={tutor.id} className="search-result-item">
            <h3>{tutor.name}</h3>
            <p>{tutor.subject} - {tutor.city}</p>
            <Link to={`/tutor/${tutor.id}`}>Voir le profil</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchScreen;