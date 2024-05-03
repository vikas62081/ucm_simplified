# main.py
# Execute : uvicorn main:app --reload
from fastapi import FastAPI
from routers.subject_swap_router import subject_swap_router

app = FastAPI()

app.include_router(subject_swap_router)
 
 