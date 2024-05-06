from bson import ObjectId
from config.database import professors_review_collection
from schemas.professor_review_helper import professor_reviews_helper,professor_review_helper
from exceptions.not_found_expection import NotFoundException
from datetime import datetime

from services.user_service import UserService
from services.professor_service import ProfessorService


class ProfessorReviewService:
    def get_professor_reviews():
        reviews=professors_review_collection.find()
        return professor_reviews_helper(reviews)
    
    def get_professor_review_by_pro_id(professor_id:str):
        reviews=professors_review_collection.find({"professor_id":professor_id})
        return professor_reviews_helper(reviews)
    
    def get_professor_review_by_usr_id(user_id:str):
        reviews=professors_review_collection.find({"user_id":user_id})
        return professor_reviews_helper(reviews)
    
    def get_review_by_user_id_and_prof_id(user_id:str,prof_id:str):
        review=professors_review_collection.find_one({"professor_id":prof_id,"user_id":user_id})
        if not review:
            raise NotFoundException(f"No Review to the professor with user {user_id}")
        return professor_review_helper(review)
    
    def get_professor_review_by_id(id):
        review = professors_review_collection.find_one({'_id': ObjectId(id)})
        if not review:
            raise NotFoundException(f"professor not found with id {id}")
        return professor_review_helper(review)
    
    def create_professor_review(professors_review):
        prof_id=professors_review["professor_id"]
        user_id=professors_review["user_id"]
        try:
            existing_review=ProfessorReviewService.get_review_by_user_id_and_prof_id(user_id,prof_id)
            return ProfessorReviewService.update_professor_review(existing_review,professors_review)
        except NotFoundException as e:
            # create here
            current_time=datetime.now()
            professors_review['created_at']=current_time
            professors_review['updated_at']=current_time
            rating_out_of_5=professors_review["rating_out_of_5"]
            professor= professors_review_collection.insert_one(dict(professors_review))
            UserService.upadte_professors_review_count(user_id)
            ProfessorService.update_professor_rating_to_new_review(prof_id,rating_out_of_5)
            return ProfessorReviewService.get_professor_review_by_id(professor.inserted_id)
        
        
    def update_professor_review(existing_review,latest_review):
        review = latest_review.dict()
        
        new_rating_out_of_5=review["rating_out_of_5"]
        old_rating_out_of_5=existing_review["rating_out_of_5"]
        prof_id=review["professor_id"]
        
        id=existing_review['id']
        update_review={
                "comment":review['comment'],
                "rating_out_of_5":new_rating_out_of_5,
                "updated_at":datetime.now()
            }
        
        professors_review_collection.find_one_and_update({"_id":ObjectId(id)},{"$set":dict(update_review)})
        ProfessorService.update_professor_rating_to_existing_review(prof_id,new_rating_out_of_5,old_rating_out_of_5)
        return ProfessorReviewService.get_professor_review_by_id(id)