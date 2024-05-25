def professor_helper(professor)->dict:
    return {
        "id": str(professor["_id"]),
        "name": professor["name"],
        "email": professor["email"],
        "designation": professor["designation"],
        "subjects_taught": professor["subjects_taught"],
        # "career_started_date": professor["career_started_date"],
        # "ucm_joined_date": professor["ucm_joined_date"],
        "overall_rating_out_of_5": professor["overall_rating_out_of_5"],
        "total_ratings": professor["total_ratings"],
    }

def professors_helper(professors)->list:
    return [professor_helper(professor) for professor in professors]
