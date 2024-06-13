def accommodation_helper(accommodation)->dict:
   return {
        "id": str(accommodation.get("_id", None)),
        "community_name": accommodation.get("community_name", None),
        "address": accommodation.get("address", None),
        "type": accommodation.get("type", None),
        "move_in_date": accommodation.get("move_in_date", None),
        "move_out_date": accommodation.get("move_out_date", None),
        "floor_plan": accommodation.get("floor_plan", None),
        "rent_amount_per_person": accommodation.get("rent_amount_per_person", None),
        "utilities_included": accommodation.get("utilities_included", None),
        "current_occupancies": accommodation.get("current_occupancies", None),
        "available_occupancies": accommodation.get("available_occupancies", None),
        "aminities": accommodation.get("aminities", None),
        "status": accommodation.get("status", None),
        "additional_info":accommodation.get("additional_info", None),
        "created_at": accommodation.get("created_at", None),
        "updated_at": accommodation.get("updated_at", None),
    }



def accommodations_helper(accommodations)->list:
    return [accommodation_helper(accommodation) for accommodation in accommodations]
