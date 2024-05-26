from fastapi import HTTPException
from exceptions.unauthorized_exception import UnauthorizedException
from exceptions.not_found_expection import NotFoundException
from models.auth import OtpVerification, ResetPassword
from services.auth_helper_service import AuthHelperService
from services.user_service import UserService

auth_helper_service = AuthHelperService()

class AuthService():
    def login(self, username, password):
        try:
            user = UserService.get_user_by_email(username)
            if user is None or not auth_helper_service.verify_password(password, user['password']):
                raise UnauthorizedException(message='Invalid username and password')
            token = auth_helper_service.encode_token(str(user['_id']),user['name'])
        except NotFoundException:
            raise UnauthorizedException(message='Invalid username and password')
        return token
    
    def register_user(self, user):
        return UserService.create_user(user)
    
    def reset_password(self, reset_info): 
        try:
            user = UserService.get_user_by_email(reset_info.email)
            if user is None or not auth_helper_service.verify_password(reset_info.current_password, user['password']):
                raise UnauthorizedException(message='Invalid password')
            update_payload={
                "password": auth_helper_service.get_password_hash(reset_info.new_password)
            }
            return UserService.update_user(str(user['_id']), update_payload)
        except NotFoundException:
            raise NotFoundException(message="Invalid email")
        
       
    
    def otp_verification(self,user:OtpVerification):
        pass