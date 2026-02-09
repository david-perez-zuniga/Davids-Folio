from models.md_contact import ContactForm
from fastapi import APIRouter

router = APIRouter()

@router.post("/contact", response_model= ContactForm)
def send_data(cont: ContactForm):
    new_data = ContactForm(
        name= cont.name,
        email = cont.email,
        user_message= cont.user_message
    )

    return new_data