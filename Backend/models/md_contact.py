from pydantic import BaseModel

class ContactForm(BaseModel):
    name: str
    email: str
    user_message: str