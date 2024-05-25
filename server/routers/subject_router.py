from fastapi import APIRouter, Depends
from models.subject_swap import Status, SubjectSwap
from services.auth_helper_service import AuthHelperService
from services.subject_service import SubjectService
from models.success_response import SuccessResponse

subject_router=APIRouter(tags=["Subject Swap"])
auth_dependency = Depends(AuthHelperService().auth_wrapper)

@subject_router.get("")
def get_subject_swaps(status:Status):
    query = {}
    if status is not None:
        query['status'] = status.value
    subjects= SubjectService.get_subject_swaps(query)
    return SuccessResponse(data=subjects,message="Subject swap data retrieved successfully")


@subject_router.get("/{id}")
def get_subject_swap_for_id(id:str):
    subject= SubjectService.get_subject_swap_by_id(id)
    return SuccessResponse(data=subject,message="Subject swap data retrieved successfully")


@subject_router.post("")
def create_subject_swaps_request(subject:SubjectSwap,user_id:str=auth_dependency):
   new_subject = SubjectService.create_subject_swap_request(user_id,subject.model_dump())
   return SuccessResponse(data=new_subject,message= "Subject swap request created successfully")


@subject_router.patch('/${id}')
def update_subject_swaps_request(id:str, subject: SubjectSwap):
    updated_subject=SubjectService.update_subject_swap_request(id,subject.model_dump())
    return SuccessResponse(data=updated_subject,message=  "Subject swap request updated successfully")


@subject_router.patch('/${id}/complete')
def update_subject_swaps_request_complete(id: str):
    updated_subject= SubjectService.update_subject_swap_status_complete(id)
    return SuccessResponse(data=updated_subject,message= "Subject swap request completed successfully")

@subject_router.delete('/${id}')
def delete_subject_swaps_request_status(id: str):
    SubjectService.delete_subject_swap_request(id)
    return SuccessResponse(data=id,message= "Subject swap request deleted successfully")