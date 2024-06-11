import React, { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw.api';
import './App.css'
import Header from './components/Header/Header';


function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const fetchedStarships = await getAllStarships();
      setStarships(fetchedStarships);
    };

    fetchStarships();
  }, []);

  return (
    <div className="App">
     <Header />
      {starships.map((starship) => (
        <div key={starship.name} className="starship-card">
          <h2>{starship.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
