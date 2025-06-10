import React, { useState } from "react";
// import '../App.css';

const RecommendationForm = ({ onAddRecommendation }) => {
  const [price, setPrice] = useState("");
  const [rooms, setRooms] = useState("");
  const [parking, setParking] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecommendation = {
      price,
      rooms,
      parking,
    };
    onAddRecommendation(newRecommendation);
    setPrice("");
    setRooms("");
    setParking("");
  };

  return (
    <form className="recommendation-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="form-input"
          placeholder="Enter price ($)"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="rooms">Rooms:</label>
        <input
          type="number"
          id="rooms"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
          className="form-input"
          placeholder="Enter number of rooms"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="parking">Parking:</label>
        <select
          id="parking"
          value={parking}
          onChange={(e) => setParking(e.target.value)}
          className="form-input"
          required
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      {/* Add a button aligned at the center */}
      <div style={{ textAlign: "center" }} className="button-group">
        <button type="submit" className="recommendation-button">
          Add Recommendation
        </button>
      </div>
      
    </form>
  );
};

export default RecommendationForm;
