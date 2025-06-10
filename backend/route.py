from fastapi import APIRouter
from pydantic import BaseModel
from models import get_model
from data_utils import encode_user_input
from schema import RecommendationRequest

router = APIRouter()

model, dataset = get_model()

@router.post("/recommend")
def recommend(data: RecommendationRequest):
    input_vec = encode_user_input(data.price, data.rooms, data.parking)
    distances, indices = model.kneighbors(input_vec)

    return {
        "recommendations": [
            {"house_id": int(i), "similarity_score": round(float(d), 2)}
            for i, d in zip(indices[0], distances[0])
        ]
    }
