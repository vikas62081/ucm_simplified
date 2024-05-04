from fastapi import APIRouter
from models.subject_swap import SubjectSwap, SubjectSwapStatus
from services.subject_swap_service import SubjectSwapService
from utils.index import ResponseModel

subject_swap_router=APIRouter(tags=["Subject Swap"])



@subject_swap_router.get("")
def get_subject_swaps(status:SubjectSwapStatus):
    query = {}
    if status is not None:
        query['status'] = status.value
    subjects=SubjectSwapService.get_subject_swaps(query)
    return ResponseModel(data=subjects,message="Subject swap data retrieved successfully")


@subject_swap_router.get("/{id}")
def get_subject_swaps_for_id(id:str):
    subject=SubjectSwapService.get_subject_swaps_by_id(id)
    return ResponseModel(data=subject,message="Subject swap data retrieved successfully")


@subject_swap_router.post("")
def create_subject_swaps_request(subject:SubjectSwap):
   new_subject = SubjectSwapService.create_subject_swaps_request(subject)
   return ResponseModel(data=new_subject,message= "Subject swap request created successfully")


@subject_swap_router.patch('/${id}')
def update_subject_swaps_request(id:str, subject: SubjectSwap):
    updated_subject=SubjectSwapService.update_subject_swaps_request(id,subject)
    return ResponseModel(data=updated_subject,message=  "Subject swap request updated successfully")


@subject_swap_router.patch('/${id}/complete')
def update_subject_swaps_request_status(id: str):
    subject={}
    subject['status'] =SubjectSwapStatus.COMPLETED
    updated_subject=SubjectSwapService.update_subject_swaps_request(id,subject)
    return ResponseModel(data=updated_subject,message= "Subject swap request completed successfully")

@subject_swap_router.delete('/${id}')
def delete_subject_swaps_request_status(id: str):
    SubjectSwapService.delete_subject_swaps_request(id)
    return ResponseModel(data=id,message= "Subject swap request deleted successfully")