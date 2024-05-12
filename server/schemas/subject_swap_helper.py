def subject_swap_helper(subject) -> dict:
    return {
        "id": str(subject.get("_id", None)),
        "current_subject": subject.get("current_subject", None),
        "timing": subject.get("timing", None),
        "crn": subject.get("crn", None),
        "professor": subject.get("professor", None),
        "deadline": subject.get("deadline", None),
        "desired_subjects": subject.get("desired_subjects", None),
        "status": subject.get("status", None),
        "additional_info":subject.get("additional_info", None),
        "created_at": subject.get("created_at", None),
        "updated_at": subject.get("updated_at", None),
    }



def subject_swaps_helper(subjects)->list:
    return [subject_swap_helper(subject) for subject in subjects]