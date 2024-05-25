from fastapi import HTTPException
from services.auth_helper_service import AuthHelperService
from services.user_service import UserService


class AuthService():
    def login(self, username, password):
        user = UserService.get_user_by_email(username)
        if user is None or not AuthHelperService().verify_password(password, user['password']):
            raise HTTPException(status_code=401, detail='Invalid username and/or password')
        token = AuthHelperService().encode_token(str(user['_id']),user['name'])
        return token