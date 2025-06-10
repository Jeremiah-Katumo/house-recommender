from pydantic import BaseModel

class RecommendationRequest(BaseModel):
	price: float
	rooms: int
	parking: bool
 
class RecommendationResponse(BaseModel):
	house_id: str
	address: str
	price: int
	rooms: int
	parking: bool

class RecommendationsResponse(BaseModel):
	recommendations: list[RecommendationResponse]