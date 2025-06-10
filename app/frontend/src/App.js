import React, { useState } from 'react';
import './App.css';
import RecommendationForm from './components/RecommendationForm';
import RecommendationList from './components/RecommendationList';

const App = () => {
  const [recommendations, setRecommendations] = useState([]);

  const handleAddRecommendation = (recommendation) => {
    setRecommendations((prev) => [...prev, recommendation]);
  };

  return (
    <div className="app-container">
      <h1>Housing Recommendations</h1>
      <RecommendationForm onAddRecommendation={handleAddRecommendation} />
      <RecommendationList recommendations={recommendations} />
    </div>
  );
};

export default App;
