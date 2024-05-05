
from datetime import datetime
from pydantic import BaseModel


class ProfessorReview(BaseModel):
    user_id:str
    professor_id:str
    overall_rating_out_of_5:int
    comment:str
    created_at:datetime
    updated_at:datetime