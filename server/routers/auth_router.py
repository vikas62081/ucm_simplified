from fastapi import APIRouter

from models.auth import AuthDetails, ResetPassword
from models.success_response import SuccessResponse
from models.user import CreateUser
from services.user_service import UserService
from services.auth_service import AuthService


auth_router=APIRouter(tags=["Auth"])
auth_service=AuthService()

@auth_router.post('/login')
def login_user(auth: AuthDetails):
    token=auth_service.login(auth.username,auth.password)
    return SuccessResponse(data=token,message="Token generated successfully")

@auth_router.post('/register')
def register_user(user:CreateUser):
    user=auth_service.register_user(user)
    return SuccessResponse(data=user,message="User registered successfully")


@auth_router.post('/reset-password')
def register_user(reset_info:ResetPassword):
    user=auth_service.reset_password(reset_info)
    return SuccessResponse(data=user,message="Password reset successfully")
