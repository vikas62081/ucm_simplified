from datetime import datetime
from config.database import accommodation_collection
from bson import ObjectId

from exceptions.not_found_expection import NotFoundException
from schemas.accommodation_helper import accommodation_helper,accommodations_helper
from models.subject_swap import Status
from services.user_service import UserService

class AccommodationService:
    def get_accommodations():
        accommodations=accommodation_collection.find()
        return accommodations_helper(accommodations)
    
    def get_accommodation_by_id(id):
        accommodation = accommodation_collection.find_one({'_id': ObjectId(id)})
        if not accommodation:
            raise NotFoundException(f"Accomodation not found with id {id}")
        return accommodation_helper(accommodation)
    
    def create_accommodation_request(user_id,accommodation):
        now=datetime.now()
        accommodation['status'] = Status.ACTIVE
        accommodation['created_at']=now
        accommodation['updated_at']=now
        acco=accommodation_collection.insert_one(dict(accommodation))
        doc_id=acco.inserted_id
        UserService.add_accommodation_request(user_id,doc_id)
        return AccommodationService.get_accommodation_by_id(doc_id)
    
    def update_accommodation_request(id:str,accommodation:dict):
        AccommodationService.get_accommodation_by_id(id)
        accommodation['updated_at']=datetime.now()
        accommodation_collection.find_one_and_update({"_id":ObjectId(id)},{"$set":dict(accommodation)})
        return AccommodationService.get_accommodation_by_id(id)