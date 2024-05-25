from fastapi import APIRouter
from services.user_service import UserService
from services.professor_review_service import ProfessorReviewService
from models.success_response import SuccessResponse

user_router=APIRouter(tags=["User"])

@user_router.get("")
def get_users():
    users= UserService.get_users()
    return SuccessResponse(data=users,message="Users data retrieved successfully")

@user_router.get("/{id}")
def get_users_by_id(id:str):
    user=UserService.get_user_by_id(id)
    return SuccessResponse(data=user,message="User data retrieved successfully")

@user_router.get("/{id}/reviews")
def get_reviews_by_user_id(id:str):
    reviews=ProfessorReviewService.get_professor_review_by_usr_id(id)
    return SuccessResponse(data=reviews,message="Review data retrieved successfully")

