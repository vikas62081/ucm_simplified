from pymongo import MongoClient
username="simplified"
password="simplified123!"

uri = "mongodb+srv://"+username+":"+password+"@cluster0.s9z2dp0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = MongoClient(uri, tls=True, tlsAllowInvalidCertificates=True)

#DB
db=client["UCM_DB"]

#Collections
subject_swaps_collection = db["subject_swaps"]

users_collection = db["users"]