from pydantic import BaseModel,Field,EmailStr


class User(BaseModel):
    name:str
    email:str
    phone_number:str
    subject_swaps:list[str]
    accommodations:list[str]

    
class CreateUser(BaseModel):
    name: str = Field(..., min_length=2)
    email: EmailStr
    phone_number:str= Field(..., min_length=10,max_length=13)