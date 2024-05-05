from fastapi import APIRouter
from services.user_service import UserService
from models.success_response import SuccessResponse
from models.user import CreateUser

user_router=APIRouter(tags=["User"])

@user_router.get("")
def get_users():
    users= UserService.get_users()
    return SuccessResponse(data=users,message="Users data retrieved successfully")

@user_router.get("/{id}")
def get_users_by_id(id:str):
    user=UserService.get_user_by_id(id)
    return SuccessResponse(data=user,message="User data retrieved successfully")

@user_router.post("")
def create_user(user:CreateUser):
    user=UserService.create_user(user)
    return SuccessResponse(data=user,message="User created successfully")
     
