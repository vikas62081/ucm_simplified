from enum import Enum
from typing import Optional
from pydantic import BaseModel
from datetime import datetime


class Status(str, Enum):
    ACTIVE = "active"
    COMPLETED = "completed"


class DayAndTime(BaseModel):
    day: str
    time: str
    
class Subject(BaseModel):
    subject:str
    timing:list[DayAndTime]
    crn:Optional[str]
    professor:str

class SubjectSwap(BaseModel):
  current_subject:str
  timing:list[DayAndTime]
  crn:Optional[str]
  professor:str
  deadline:datetime
  desired_subjects:list[Subject]
  additional_info:Optional[str]

  
