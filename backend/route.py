from fastapi import APIRouter
from pydantic import BaseModel
from models import get_model, get_recommendations
from data_utils import encode_user_input
from schema import RecommendationRequest

router = APIRouter()

model, dataset = get_model()

@router.post("/recommend")
def recommend(req: RecommendationRequest):
    user_vec = encode_user_input(req.price, req.rooms, req.parking)
    recommendations = get_recommendations(user_vec)
    return recommendations
