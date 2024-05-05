from bson import ObjectId
from config.database import subject_swaps_collection
from schemas.subject_swap_helper import subject_swaps_helper,subject_swap_helper
from models.subject_swap import SubjectSwapStatus
from datetime import datetime
from exceptions.not_found_expection import NotFoundException

class SubjectSwapService:
   def get_subject_swaps(query):
     subject_swaps = subject_swaps_collection.find(query)
     return subject_swaps_helper(subject_swaps)
   
   def get_subject_swaps_by_id(id:str):
      subject = subject_swaps_collection.find_one({'_id': ObjectId(id)})
      if not subject:
         raise NotFoundException(f"Subject not found with id {id}")
      return subject_swap_helper(subject)
   
   def create_subject_swaps_request(subject):
      subject_dict = subject.dict()
      subject_dict['status'] = SubjectSwapStatus.PENDING
      subject_dict['created_at']=datetime.now()
      subj=subject_swaps_collection.insert_one(dict(subject_dict))
      return SubjectSwapService.get_subject_swaps_by_id(subj.inserted_id)
   
   def update_subject_swaps_request(id:str,subject):
      SubjectSwapService.get_subject_swaps_by_id(id)
      subject_swaps_collection.find_one_and_update({"_id":ObjectId(id)},{"$set":dict(subject)})
      return SubjectSwapService.get_subject_swaps_by_id(id)
   
   def delete_subject_swaps_request(id:str):
      result=subject_swaps_collection.delete_one({"_id": ObjectId(id)})
      if result.deleted_count==0:
         raise NotFoundException(f"Subject with id {id} not found")
      return result.deleted_count
      