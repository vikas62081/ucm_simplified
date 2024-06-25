from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from twilio.rest import Client
import random

app = FastAPI()

# Twilio credentials (use environment variables for security)

TWILIO_ACCOUNT_SID=""
# os.getenv("TWILIO_ACCOUNT_SID")

TWILIO_AUTH_TOKEN=""
# os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_PHONE_NUMBER=""

# os.getenv("TWILIO_PHONE_NUMBER")

if not all([TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER]):
    raise ValueError("Twilio credentials are not set properly in environment variables.")

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

class SmsService():
    def send_sms(self,to,message):
        try:
            message=client.messages.create(
                body=message,
                from_=TWILIO_PHONE_NUMBER,
                to=to
                )
            return {"message_sid": message.sid}
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
            
        
    def generate_otp(self):
        return random.randint(100000, 999999)
    
    def verify_otp(self, email:str, otp:str):
        pass