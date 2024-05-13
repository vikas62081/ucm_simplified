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
    
class Gender(BaseModel):
    boys:Optional[int]
    girls:Optional[int]
    any:Optional[int]
    
class FloorPlan(str,Enum):
    TWO_BEDROOM_TWO_BATH="2B2B"

class Accommodation(BaseModel):
    community_name: str
    address:str
    type: AccommodationType
    move_in_date: datetime
    move_out_date: Optional[datetime]
    floor_plan: FloorPlan
    rent_amount_per_person: float
    utilities_included:bool
    current_occupancies: int
    available_occupancies: Gender
    aminities:list[str]
    additional_info:str
    # advance_amount: Optional[float]=0
    # places_nearby_in_miles: Optional[NearbyPlaces] = None
