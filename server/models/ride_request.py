from datetime import datetime, time
from enum import Enum
from typing import Optional
from models.ride_offer import RideStatus


class RideRequest:
    user_id:str
    pick_up_location:str
    drop_off_location:str
    pick_up_time:time
    pick_up_date:datetime
    status:RideStatus
    
    