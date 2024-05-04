def subject_swap_helper(subject)->dict:
    return {
        "id": str(subject["_id"]),
        "current_subject":subject["current_subject"],
        "timing":subject["timing"],
        "crn":subject["crn"],
        "professor":subject["professor"],
        "deadline":subject["deadline"],
        "desired_subject":subject["desired_subject"],
        "status":subject["status"],
        "created_at":subject["created_at"],
    }


def subject_swaps_helper(subjects)->list:
    return [subject_swap_helper(subject) for subject in subjects]