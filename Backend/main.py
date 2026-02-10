from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from router.rt_contact import router as router_contact
from models.md_contact import ContactForm

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://davids-folio.vercel.app"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,   
    allow_credentials=True,
    allow_methods=["*"],     
    allow_headers=["*"],     
)

app.include_router(router_contact, prefix="/contact", tags=["contact"])

@app.get("/")
def home():
    return {"mensaje": "Servidor funcionando", "estado": "ok"}