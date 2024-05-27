from bson import ObjectId
from config.database import professors_collection
from schemas.professor_helper import professors_helper,professor_helper
from exceptions.not_found_expection import NotFoundException
from datetime import datetime

class ProfessorService:
    def get_professors():
        professors=professors_collection.find()
        return professors_helper(professors)
    
    def get_professor_by_id(id):
        professor = professors_collection.find_one({'_id': ObjectId(id)})
        if not professor:
            raise NotFoundException(f"professor not found with id {id}")
        return professor_helper(professor)
    
    def create_professor(professor):
        professor_dict = professor.dict()
        professor_dict['overall_rating_out_of_5']=0
        professor_dict['total_ratings']=0
        professor_dict['created_at']=datetime.now()
        professor= professors_collection.insert_one(dict(professor_dict))
        return ProfessorService.get_professor_by_id(professor.inserted_id)
    
    def update_professor(id:str,professor):
        professor['updated_at']=datetime.now()
        professors_collection.find_one_and_update({"_id":ObjectId(id)},{"$set":dict(professor)})
        return ProfessorService.get_professor_by_id(id)
    
    def update_professor_rating_to_new_review(id:str,new_rating:int):
        prof=ProfessorService.get_professor_by_id(id)
        overall_rating=prof['overall_rating_out_of_5']
        rater=prof['total_ratings']
        new_rater=rater+1
        overall_rating=(overall_rating*rater+new_rating)/new_rater
        upadated_prof={}
        upadated_prof["overall_rating_out_of_5"]=overall_rating
        upadated_prof['total_ratings']=new_rater
        return ProfessorService.update_professor(id,upadated_prof)
    
    def update_professor_rating_to_existing_review(id:str,new_rating:int,old_rating:int):
        prof=ProfessorService.get_professor_by_id(id)
        overall_rating=prof['overall_rating_out_of_5']
        rater=prof['total_ratings']
        overall_rating=(overall_rating*rater+new_rating-old_rating)/rater
        upadated_prof={}
        upadated_prof["overall_rating_out_of_5"]=overall_rating
        return ProfessorService.update_professor(id,upadated_prof)
    
    
        
        
        
        
    