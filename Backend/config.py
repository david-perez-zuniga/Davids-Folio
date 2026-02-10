from dotenv import load_dotenv
from pydantic import SecretStr
import os
from fastapi_mail import ConnectionConfig

load_dotenv()

email_user = os.environ["USER_MAIL"]
password = os.environ["PASSWORD_MAIL"]
server = os.environ["SERVER"]
port = int(os.environ["PORT"])
remitent = os.environ["REMITENT"]

conf = ConnectionConfig(
    MAIL_USERNAME = email_user,
    MAIL_PASSWORD = SecretStr(password),
    MAIL_FROM = remitent,
    MAIL_PORT = port,
    MAIL_SERVER = server,
    MAIL_FROM_NAME="Mensaje desde el Portafolio",
    MAIL_STARTTLS = True,
    MAIL_SSL_TLS = False,
    USE_CREDENTIALS = True,
    VALIDATE_CERTS = True    
)