from enum import Enum
from pydantic import BaseModel
from datetime import datetime

class DayAndTime(BaseModel):
    day: str
    time: str

class SubjectSwapRequest(BaseModel):
  current_subject:str
  timing:list[DayAndTime]
  crn:int
  professor:str
  deadline:datetime
  desired_subject:str

class SubjectSwapRequestStatus(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
