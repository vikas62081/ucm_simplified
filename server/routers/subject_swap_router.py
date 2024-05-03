from datetime import datetime
from bson import ObjectId
from fastapi import APIRouter
from schemas.subject_swap_schema import list_subject_swap_serial,individual_subject_swap_serial
from config.database import subject_swaps_collection
from models.subject_swap import SubjectSwapRequest, SubjectSwapRequestStatus

subject_swap_router=APIRouter()


@subject_swap_router.get('/')
def get_subject_swaps(status: SubjectSwapRequestStatus = None):
    query = {}
    if status:
        query['status'] = status.value
    subject_swaps = subject_swaps_collection.find(query)
    return list_subject_swap_serial(subject_swaps)

@subject_swap_router.get("/{id}")
def get_subject_swaps_for_id(id):
    return individual_subject_swap_serial(subject_swaps_collection.find_one({'_id':ObjectId(id)}))

@subject_swap_router.post("/")
def create_subject_swaps_request(subject:SubjectSwapRequest):
    subject_dict = subject.dict()
    subject_dict['status'] = SubjectSwapRequestStatus.PENDING
    subject_dict['created_at'] = datetime.now()
    id=subject_swaps_collection.insert_one(dict(subject_dict))
    return {"message": "Subject swap request created successfully"}

@subject_swap_router.patch('/${id}')
def update_subject_swaps_request(id:str, subject: SubjectSwapRequest):
    subject_swaps_collection.find_one_and_update({"_id":ObjectId(id)},{"$set":dict(subject)})
    return {"message": "Subject swap request updated successfully"}

@subject_swap_router.patch('/${id}/complete')
def update_subject_swaps_request_status(id: str):
    subject=get_subject_swaps_for_id(id)
    subject['status'] =SubjectSwapRequestStatus.COMPLETED
    subject_swaps_collection.find_one_and_update({"_id":ObjectId(id)},{"$set":dict(subject)})
    return {"message": "Subject swap request completed successfully"}