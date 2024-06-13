
from pydantic import BaseModel,Field


class ProfessorReview(BaseModel):
    rating_out_of_5:int=Field(..., description="Rating out of 5", ge=1, le=5)
    comment:str
    
    
