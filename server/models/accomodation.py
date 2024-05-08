from enum import Enum
from typing import Optional
from pydantic import BaseModel
from datetime import datetime

class AccommodationType(str, Enum):
    TEMPORARY = "temporary"
    PERMANENT = "permanent"

class NearbyPlaces(BaseModel):
    walmart: int
    costco: int
    kcmart:int

class Accommodation(BaseModel):
    community_name: str
    floor_plan: str #create a class 
    current_occupancies: int
    available_occupancies: int
    type: AccommodationType
    move_in_date: datetime
    move_out_date: Optional[datetime]
    rent_amount: float
    advance_amount: Optional[float]=0
    places_nearby_in_miles: Optional[NearbyPlaces] = None
