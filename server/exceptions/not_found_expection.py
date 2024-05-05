from fastapi import status

class NotFoundException(Exception):
    def __init__(self,message:str ):
        self.message=message
        self.status_code=status.HTTP_404_NOT_FOUND