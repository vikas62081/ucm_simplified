from fastapi import status

class UnauthorizedException(Exception):
    def __init__(self,message:str ):
        self.message=message
        self.status_code=status.HTTP_401_UNAUTHORIZED