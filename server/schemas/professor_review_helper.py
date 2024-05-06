def professor_review_helper(professor_review)->dict:
    return {
        "id": str(professor_review["_id"]),
        "comment": professor_review["comment"],
        "rating_out_of_5": professor_review["rating_out_of_5"],
        "user_id": professor_review["user_id"],
        "professor_id": professor_review["professor_id"],
    }

def professor_reviews_helper(professor_reviews)->list:
    return [professor_review_helper(professor_review) for professor_review in professor_reviews]
