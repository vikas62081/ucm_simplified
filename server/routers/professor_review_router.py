from fastapi import APIRouter
from services.professor_review_service import ProfessorReviewService
from models.success_response import SuccessResponse
from models.professor_review import ProfessorReview

professor_review_router=APIRouter(tags=["Professor Review"])

@professor_review_router.get("")
def get_reviews():
    reviews= ProfessorReviewService.get_professor_reviews()
    return SuccessResponse(data=reviews,message="Review data retrieved successfully")

@professor_review_router.get("/{id}")
def get_review_by_id(id:str):
    review=ProfessorReviewService.get_professor_review_by_id(id)
    return SuccessResponse(data=review,message="Review data retrieved successfully")

     
@professor_review_router.patch("/{id}")
def update_review(id:str,professor:ProfessorReview):
    review=ProfessorReviewService.update_professor(id,professor)
    return SuccessResponse(data=review,message="Review created successfully")
     

