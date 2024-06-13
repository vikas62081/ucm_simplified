def professor_review_helper(professor_review)->dict:
    return {
        "id": str(professor_review["_id"]),
        "comment": professor_review.get("comment",None),
        "rating_out_of_5": professor_review.get("rating_out_of_5",None),
        "user_id": professor_review.get("user_id",None),
        "professor_id": professor_review.get("professor_id",None),
    }

def professor_reviews_helper(professor_reviews)->list:
    return [professor_review_helper(professor_review) for professor_review in professor_reviews]
