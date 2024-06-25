from bson import ObjectId
from config.database import users_collection
from schemas.user_helper import users_helper,user_helper
from exceptions.not_found_expection import NotFoundException
from datetime import datetime
from services.sms_service import SmsService
from services.auth_helper_service import AuthHelperService

sms_service = SmsService()

class UserService():
    def get_users():
        users=users_collection.find()
        return users_helper(users)
    
    def get_user_by_id(id):
        user = users_collection.find_one({'_id': ObjectId(id)})
        if not user:
            raise NotFoundException(f"User not found with id {id}")
        return user_helper(user)
    
    def get_user_by_email(email:str):
        user = users_collection.find_one({'email':email})
        if not user:
            raise NotFoundException(f"User not found with email id {email}")
        return user
    
    def create_user(user):
        try:
            print(user.email)
            UserService.get_user_by_email(user.email)
            # user already exist raise an exception
        except:
            now=datetime.now()
            user_dict = user.dict()
            user_dict['subject_swaps']=[]
            user_dict['accommodations']=[]
            user_dict['total_professors_review_count']=0
            user_dict['created_at']=now
            user_dict['updated_at']=now
            user_dict['password']=AuthHelperService().get_password_hash(user.password)
            user= users_collection.insert_one(dict(user_dict))
            # otp=sms_service.generate_otp()
            # UserService.update_user(user.inserted_id,{"otp":otp})
            # sms_service.send_sms(user_dict["phone_number"],message=otp)
            return UserService.get_user_by_id(user.inserted_id)
    
    def update_user(id:str,user):
        user['updated_at']=datetime.now()
        users_collection.find_one_and_update({"_id":ObjectId(id)},{"$set":dict(user)})
        return UserService.get_user_by_id(id)
    
    def update_user_requests(user_id:str,request_id:str,key:str):
        user=UserService.get_user_by_id(user_id)
        keyValues:list=user[key]
        keyValues.append(str(request_id))
        new_user={}
        new_user[key] =keyValues
        return UserService.update_user(user_id,new_user)
    
    def add_subject_swap_request(user_id:str,subject_id:str):
        return UserService.update_user_requests(user_id,subject_id,"subject_swaps")
    
    def add_accommodation_request(user_id:str,accommodation_id:str):
        return UserService.update_user_requests(user_id,accommodation_id,"accommodations")
    
    def upadte_professors_review_count(user_id:str):
        user=UserService.get_user_by_id(user_id)
        updated_user={"total_professors_review_count":user["total_professors_review_count"]+1}
        return UserService.update_user(user_id,updated_user)
  
    

