from enum import Enum
from pydantic import BaseModel
from datetime import datetime


class SubjectSwapStatus(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"


class DayAndTime(BaseModel):
    day: str
    time: str

class SubjectSwap(BaseModel):
  current_subject:str
  timing:list[DayAndTime]
  crn:int
  professor:str
  deadline:datetime
  desired_subject:str 
  
 
