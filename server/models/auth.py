from pydantic import BaseModel, EmailStr


class AuthDetails(BaseModel):
    username: EmailStr
    password: str
    
class ResetPassword(BaseModel):
    email: EmailStr
    current_password:str
    new_password:str
    
class OtpVerification(BaseModel):
    email: EmailStr
    otp: str