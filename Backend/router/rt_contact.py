from models.md_contact import ContactForm
from fastapi import APIRouter
from dotenv import load_dotenv
import os
import requests

load_dotenv()
router = APIRouter()

@router.post("/contact", response_model= ContactForm)
async def send_data(cont: ContactForm):
    
    discord_url = os.getenv("DISCORD_WEBHOOK_URL")
    
    if not discord_url:
        print("Error: No se encontró la URL de Discord")
        
    
    
    data = {
        "content": "**¡Nuevo contacto del Portafolio!**",
        "embeds": [
            {
                "title": f"Mensaje de {cont.name}",
                "color": 5763719,
                "fields": [
                    {"name": "📧 Email", "value": cont.email, "inline": True},
                    {"name": "💬 Mensaje", "value": cont.user_message}
                ]
            }
        ]
    }

    # 2. Enviar a Discord
    try:
        response = requests.post(discord_url, json=data)
        response.raise_for_status() 
    except Exception as e:
        print(f"Error enviando a Discord: {e}")
        
    return cont