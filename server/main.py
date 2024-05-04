# main.py
# Execute : uvicorn main:app --reload
from fastapi import FastAPI, HTTPException
from routers.subject_swap_router import subject_swap_router
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from utils.index import ErrorResponseModel
app = FastAPI()


@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(
        status_code=exc.status_code,
        content=exc.detail)

@app.exception_handler(RequestValidationError)
async def http_exception_handler(request, exc):
    return JSONResponse(
        status_code=422,
        content=ErrorResponseModel(code=422,error=True,message=str(exc)))

app.include_router(subject_swap_router,prefix="/subjects")
 

 