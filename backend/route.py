from fastapi import APIRouter
from pydantic import BaseModel
from models import get_model, get_recommendations
from data_utils import encode_user_input
from schema import RecommendationRequest, RecommendationsResponse, RecommendationResponse

router = APIRouter()

model, dataset = get_model()

@router.post("/recommend", response_model=RecommendationsResponse)
def recommend(req: RecommendationRequest):
    user_vec = encode_user_input(req.price, req.rooms, req.parking)
    recs = get_recommendations(user_vec)
    # Convert dicts to RecommendationResponse objects
    rec_objs = [RecommendationResponse(**rec) for rec in recs]
    
    return RecommendationsResponse(recommendations=rec_objs)
