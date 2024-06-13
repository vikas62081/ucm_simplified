from fastapi import APIRouter, Depends
from services.auth_helper_service import AuthHelperService
from services.professor_service import ProfessorService
from services.professor_review_service import ProfessorReviewService
from models.success_response import SuccessResponse
from models.professor import Professor
from models.professor_review import ProfessorReview

professor_router=APIRouter(tags=["Professor"])
auth_dependency = Depends(AuthHelperService().auth_wrapper)

@professor_router.get("")
def get_professors():
    professors= ProfessorService.get_professors()
    return SuccessResponse(data=professors,message="Professors data retrieved successfully")

@professor_router.get("/{id}")
def get_professors_by_id(id:str):
    professor=ProfessorService.get_professor_by_id(id)
    return SuccessResponse(data=professor,message="Professor data retrieved successfully")


@professor_router.post("")
def create_professor(professor:Professor):
    professor=ProfessorService.create_professor(professor)
    return SuccessResponse(data=professor,message="Professor created successfully")
     
@professor_router.patch("/{id}")
def update_professor(id:str,professor:Professor):
    professor=ProfessorService.update_professor(id,professor)
    return SuccessResponse(data=professor,message="Professor created successfully")

@professor_router.get("/{id}/reviews")
def get_reviews_by_user_id(id:str):
    reviews=ProfessorReviewService.get_professor_review_by_pro_id(id)
    return SuccessResponse(data=reviews,message="Review data retrieved successfully")

@professor_router.post("/{id}/reviews")
def create_review(id:str,professor:ProfessorReview,user_id:str=auth_dependency):
    
    professor_dict=professor.model_dump()
    professor_dict['professor_id']=id
    review=ProfessorReviewService.create_professor_review(user_id,professor_dict)
    return SuccessResponse(data=review,message="Review created successfully")
     

