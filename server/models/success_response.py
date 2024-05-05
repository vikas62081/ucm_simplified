from pydantic import BaseModel


class SuccessResponse(BaseModel):
    data:object
    message:str
    status_code:int=200