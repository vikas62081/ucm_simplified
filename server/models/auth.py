from pydantic import BaseModel, EmailStr


class AuthDetails(BaseModel):
    username: EmailStr
    password: str