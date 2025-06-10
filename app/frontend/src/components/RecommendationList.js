import React from 'react';

const RecommendationList = ({ recommendations }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Recommendations</h2>
      <ul style={styles.list}>
        {recommendations.map((rec, index) => (
          <li key={index} style={styles.item}>
            <div><strong>House ID:</strong> {rec.house_id}</div>
            <div><strong>Address:</strong> {rec.address}</div>
            <div><strong>Price:</strong> ${rec.price}</div>
            <div><strong>Rooms:</strong> {rec.rooms}</div>
            <div><strong>Parking:</strong> {rec.parking}</div> {/* 👈 explicitly shown */}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '20px',
    padding: '10px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  heading: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: 0,
  },
  item: {
    padding: '10px',
    marginBottom: '8px',
    backgroundColor: '#f9f9f9',
    borderRadius: '6px',
    border: '1px solid #ddd',
  },
};

export default RecommendationList;
