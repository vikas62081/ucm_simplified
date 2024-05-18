from bson import ObjectId
from config.database import subject_swaps_collection
from schemas.subject_swap_helper import subject_swaps_helper,subject_swap_helper
from models.subject_swap import SubjectSwapStatus
from datetime import datetime
from exceptions.not_found_expection import NotFoundException
from services.user_service import UserService

class SubjectSwapService:
   def get_subject_swaps(query:dict):
     subject_swaps =subject_swaps_collection.find(query)
     return subject_swaps_helper(subject_swaps)
   
   def get_subject_swap_by_id(id:str):
      subject = subject_swaps_collection.find_one({'_id': ObjectId(id)})
      if not subject:
         raise NotFoundException(f"Subject not found with id {id}")
      return subject_swap_helper(subject)
   
   def create_subject_swap_request(subject:dict):
      now=datetime.now()
      subject['status'] = SubjectSwapStatus.ACTIVE
      subject['created_at']=now
      subject['updated_at']=now
      subj=subject_swaps_collection.insert_one(dict(subject))
      doc_id=subj.inserted_id
      UserService.add_subject_swap_request("663808ca92958964ba8bd457",doc_id)
      return SubjectSwapService.get_subject_swap_by_id(doc_id)
   
   def update_subject_swap_request(id:str,subject:dict):
      subject_dict = subject
      SubjectSwapService.get_subject_swap_by_id(id)
      subject_dict['updated_at']=datetime.now()
      subject_swaps_collection.find_one_and_update({"_id":ObjectId(id)},{"$set":dict(subject_dict)})
      return SubjectSwapService.get_subject_swap_by_id(id)
   
   def update_subject_swap_status_complete(id:str):
      subject={}
      subject['status'] =SubjectSwapStatus.COMPLETED
      return SubjectSwapService.update_subject_swap_request(id,subject)

   def delete_subject_swap_request(id:str):
      result=subject_swaps_collection.delete_one({"_id": ObjectId(id)})
      if result.deleted_count==0:
         raise NotFoundException(f"Subject not found with id {id}")
      return result.deleted_count
      