from fastapi import APIRouter
from models.accomodation import Accommodation
from services.accommodation_service import AccommodationService
from models.success_response import SuccessResponse

accommodation_router=APIRouter(tags=["Accommodation"])


@accommodation_router.get("")
def get_accommodations():
    accos= AccommodationService.get_accommodations()
    return SuccessResponse(data=accos,message="Accommodations data retrieved successfully")


@accommodation_router.get("/{id}")
def get_accommodation_for_id(id:str):
    acco= AccommodationService.get_accommodation_by_id(id)
    return SuccessResponse(data=acco,message="Accommodations data retrieved successfully")


@accommodation_router.post("")
def create_accommodation_request(accommodation:Accommodation):
   new_acco = AccommodationService.create_accommodation_request(accommodation.model_dump())
   return SuccessResponse(data=new_acco,message= "Accommodations request created successfully")


@accommodation_router.patch('/${id}')
def update_accommodation_request(id:str, accommodation: Accommodation):
    updated_acco = AccommodationService.update_accommodation_request(id,accommodation.model_dump())
    return SuccessResponse(data=updated_acco,message=  "Accommodations request updated successfully")


# @subject_swap_router.patch('/${id}/complete')
# def update_subject_swaps_request_complete(id: str):
#     updated_subject= SubjectSwapService.update_subject_swap_status_complete(id)
#     return SuccessResponse(data=updated_subject,message= "Subject swap request completed successfully")

# @subject_swap_router.delete('/${id}')
# def delete_subject_swaps_request_status(id: str):
#     SubjectSwapService.delete_subject_swap_request(id)
#     return SuccessResponse(data=id,message= "Subject swap request deleted successfully")