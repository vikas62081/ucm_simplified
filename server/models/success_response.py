from pydantic import BaseModel
from fastapi import status

class SuccessResponse(BaseModel):
    data:object
    message:str
    status_code:int=status.HTTP_200_OK