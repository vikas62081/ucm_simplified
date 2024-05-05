def user_helper(user)->dict:
    return {
        "id": str(user["_id"]),
        "name": user["name"],
        "email": user["email"],
        "phone_number": user["phone_number"],
        "subject_swaps": user["subject_swaps"],
        "accommodations": user["accommodations"],
    }

def users_helper(users)->list:
    return [user_helper(user) for user in users]