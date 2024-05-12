from datetime import datetime, time
from enum import Enum
from typing import Optional


class RideType(str, Enum):
    DRIVER = "driver"
    RIDER = "rider"
    
class RideStatus(str,Enum):
    ACTIVE="active"
    COMPLETED="completed"

class Ride:
    type:RideType
    pick_up_location:str
    pick_up_time:time
    pick_up_date:datetime
    drop_off_location:str
    required_occupency:Optional[int]
    available_occupancy:Optional[int]
    status:RideStatus
    
    
    