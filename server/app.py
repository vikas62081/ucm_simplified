from fastapi import Depends, FastAPI,status
from fastapi.exceptions import RequestValidationError
from bson.errors import InvalidId

from routers.subject_router import subject_router
from routers.user_router import user_router
from routers.professor_router import professor_router
from routers.accommodation_router import accommodation_router
from exceptions.not_found_expection import NotFoundException
from models.error_response import ErrorResponse
from services.auth_helper_service import AuthHelperService
from routers.auth_router import auth_router
app = FastAPI()

auth_dependency = Depends(AuthHelperService().auth_wrapper)

@app.get("/")
async def check_health():
    return {"status": "OK"}

app.include_router(auth_router)
 
app.include_router(user_router,prefix='/users',dependencies=[auth_dependency])

app.include_router(subject_router,prefix="/subjects",dependencies=[auth_dependency])

app.include_router(professor_router,prefix='/professors',dependencies=[auth_dependency])

app.include_router(accommodation_router,prefix='/accommodations',dependencies=[auth_dependency])

#Global Exception handlers

@app.exception_handler(RequestValidationError)
async def http_exception_handler(request, exc:RequestValidationError):
    error_details=exc.errors()[0]
    message=str(error_details['loc'][1])+" "+error_details['msg']
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
   
   