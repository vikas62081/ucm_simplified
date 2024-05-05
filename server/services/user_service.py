from bson import ObjectId
from config.database import users_collection
from schemas.user_helper import users_helper,user_helper
from exceptions.not_found_expection import NotFoundException
from datetime import datetime
class UserService:
    async def get_users():
        users=users_collection.find()
        return users_helper(users)
    
    async def get_user_by_id(id):
        user = users_collection.find_one({'_id': ObjectId(id)})
        if not user:
            raise NotFoundException(f"User not found with id {id}")
        return user_helper(user)
    
    async def get_user_by_email(email:str):
        user = users_collection.find_one({'email':email})
        if not user:
            raise NotFoundException(f"User not found with email id {email}")
        return user_helper(user)
    
    async def create_user(user):
        user_dict = user.dict()
        user_dict['subject_swaps']=[]
        user_dict['accommodations']=[]
        user_dict['created_at']=datetime.now()
        user= users_collection.insert_one(dict(user_dict))
        return await UserService.get_user_by_id(user.inserted_id)
    
    async def add_subject_swap_request(subject_id:str):
        pass
    
    async def add_accommodation(accommodation_id:str):
        pass
    

