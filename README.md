# House Recommender

This project is a **House Recommendation System** built with a FastAPI backend and a React frontend. It demonstrates how to use machine learning techniques to recommend houses based on user preferences, using the MNIST dataset as a stand-in for house features.

## Features

- **User Input:** Users can specify their desired price, number of rooms, and parking preference.
- **Recommendations:** The system returns a list of recommended "houses" (simulated using MNIST data).
- **Frontend:** Built with React for a responsive and interactive user experience.
- **Backend:** FastAPI serves as the API layer, handling user requests and returning recommendations.
- **Machine Learning:** Uses K-Nearest Neighbors (KNN) to find similar "houses" based on user input, with the MNIST dataset as a placeholder for real house data.

## Project Structure

```
house-recommender/
├── backend/
│   ├── main.py            # FastAPI application
│   ├── models.py          # ML model loading and recommendation logic
│   ├── data_utils.py      # User input encoding utilities
│   ├── schema.py          # Pydantic schemas for request/response
│   └── ...                # Other backend files
├── app/
│   └── frontend/
│       └── src/
│           └── components/
│               ├── RecommendationForm.js
│               └── RecommendationList.js
│           └── ...        # Other frontend files
├── .env-dist
└── README.md
```

## How It Works

1. **User submits preferences** (price, rooms, parking) via the frontend form.
2. **Backend encodes input** and uses a KNN model (trained on MNIST) to find similar "houses."
3. **Recommendations are returned** with simulated house details and displayed in the frontend.

## Setup Instructions

### Backend

1. Install dependencies:
    ```sh
    cd backend
    pip install -r requirements.txt
    ```
2. Run the FastAPI server:
    ```sh
    uvicorn main:app --reload
    ```

### Frontend

1. Navigate to the frontend directory:
    ```sh
    cd app/frontend
    ```
2. Install dependencies:
    ```sh
    npm i
    ```
3. Start the React development server:
    ```sh
    npm start
    ```
