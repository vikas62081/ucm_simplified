def individual_subject_swap_serial(subject)->dict:
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


def list_subject_swap_serial(subjects)->list:
    return [individual_subject_swap_serial(subject) for subject in subjects]