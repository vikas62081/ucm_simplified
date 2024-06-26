from fastapi import Depends, HTTPException, Security
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from passlib.context import CryptContext
from datetime import datetime, timedelta
import jwt
from exceptions.unauthorized_exception import UnauthorizedException

class AuthHelperService:
    security = HTTPBearer()
    pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
    secret = 'SECRET'
    time_to_expires_in_mins=30
    algorithms='HS256'

    def get_password_hash(self, password):
        return self.pwd_context.hash(password)

    def verify_password(self, plain_password, hashed_password):
        return self.pwd_context.verify(plain_password, hashed_password)

    def encode_token(self, user_id,name):
        payload = {
            'exp': datetime.utcnow() + timedelta(minutes=self.time_to_expires_in_mins),
            'iat': datetime.utcnow(),
            'id': user_id,
            'name':name
        }
        token = jwt.encode(payload, self.secret, algorithm=self.algorithms)
        return token

    def decode_token(self, token):
        try:
            payload = jwt.decode(token, self.secret, algorithms=[self.algorithms])
            return payload['id']
        except jwt.ExpiredSignatureError:
            raise UnauthorizedException(message='Token has expired')
        except jwt.InvalidTokenError:
            raise UnauthorizedException( message='Invalid token')

    def auth_wrapper(self, auth: HTTPAuthorizationCredentials = Security(security)):
        return self.decode_token(auth.credentials)

