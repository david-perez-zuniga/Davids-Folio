from models.md_contact import ContactForm
from fastapi import APIRouter
from fastapi_mail import FastMail, MessageSchema, MessageType
from pydantic import EmailStr
from config import conf

router = APIRouter()

@router.post("/contact", response_model= ContactForm)
async def send_data(cont: ContactForm):
    new_data = ContactForm(
        name= cont.name,
        email = cont.email,
        user_message= cont.user_message
    )

    html_message = f"""<p>Nuevo mensaje de: {cont.name} {cont.email} </p>
    <p>El mensaje es: {cont.user_message}</p>"""

    message = MessageSchema(
        subject="Nuevo mensaje del portafolio",
        recipients=["davidhumbertop503@gmail.com"],
        body=html_message,
        subtype=MessageType.html
    )

    fm = FastMail(conf)
    await fm.send_message(message)

    return new_data