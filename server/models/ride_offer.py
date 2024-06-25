from datetime import datetime, time
from enum import Enum
from typing import Optional

    
class RideStatus(str,Enum):
    ACTIVE="active"
    COMPLETED="completed"
    CANCELLED="cancelled"

class RideOffer:
    driver_id:str
    pick_up_location:str
    drop_off_location:str
    pick_up_time:time
    pick_up_date:datetime
    total_seats:Optional[int]
    available_seats:Optional[int]
    status:RideStatus
    vehical_license_plate:Optional[int]
    
    
    