from datetime import datetime
from typing import Optional

from pydantic import BaseModel

class Professor(BaseModel):
    name:str
    email:Optional[str]
    designation:str
    subjects_taught:list[str] #subjects tought by the professor
    career_started_date:datetime
    ucm_joined_date:datetime
    overall_rating_out_of_5:int
    total_ratings: int # total no. of students who rated this professor

