from pydantic import BaseModel

class RecommendationRequest(BaseModel):
	price: float
	rooms: int
	parking: bool