from fastapi import FastAPI,status
from fastapi.exceptions import RequestValidationError
from bson.errors import InvalidId
from fastapi.responses import RedirectResponse
from routers.subject_swap_router import subject_swap_router
from routers.user_router import user_router

from exceptions.not_found_expection import NotFoundException
from models.error_response import ErrorResponse


app = FastAPI()



@app.get("/")
async def check_health():
    return {"status": "OK"}

app.include_router(subject_swap_router,prefix="/subjects")
 
app.include_router(user_router,prefix='/users')

#Global Exception handlers

@app.exception_handler(RequestValidationError)
async def http_exception_handler(request, exc:RequestValidationError):
    error_details=exc.errors()[0]
    message=error_details['loc'][1]+" "+error_details['msg']
    return ErrorResponse(message=message,status_code=status.HTTP_422_UNPROCESSABLE_ENTITY).send()
   
@app.exception_handler(NotFoundException)
async def not_found_expection_handler(request,exc:NotFoundException):
    return ErrorResponse(message=exc.message,status_code=exc.status_code).send()
  
@app.exception_handler(InvalidId)
async def exception_handler(request, exc):
    return ErrorResponse(message=str(exc),status_code=status.HTTP_422_UNPROCESSABLE_ENTITY).send()

@app.exception_handler(Exception)
async def exception_handler(request, exc):
    return ErrorResponse(message=str(exc),status_code=status.HTTP_500_INTERNAL_SERVER_ERROR).send()
   
   