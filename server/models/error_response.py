from fastapi.responses import JSONResponse
from pydantic import BaseModel

class ErrorResponse(BaseModel):
    error:bool=True
    message:str
    status_code:int

    def send(self):
         return JSONResponse(status_code=self.status_code,content=self.model_dump())
