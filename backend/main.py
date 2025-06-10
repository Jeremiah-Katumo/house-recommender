from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from route import router

app = FastAPI()

# Allow React dev server to access FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the routes from route.py
app.include_router(router)
