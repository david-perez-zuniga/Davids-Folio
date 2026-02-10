const txt_name = document.getElementById("name") as HTMLInputElement;
const txt_email = document.getElementById("email") as HTMLInputElement;
const txt_message = document.getElementById("message") as HTMLTextAreaElement;
const btn_send = document.querySelector(".btn-submit") as HTMLButtonElement;
const url_send = import.meta.env.VITE_API_URL;

interface ContactData{
    name: String
    email: String
    user_message: String
}

btn_send.addEventListener("click", async(e) =>{
    e.preventDefault()
    const ContactJson: ContactData = {
        name: txt_name.value.trim(),
        email: txt_email.value.trim(),
        user_message: txt_message.value.trim()
    };

    try{
        const response = await fetch(`${url_send}/contact/contact`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ContactJson),
            credentials: "include"
            
        });
        
        btn_send.disabled = true;
        btn_send.textContent = "ENVIANDO...";
        
        const data = await response.json();

        if (response.ok) {
            alert("Mensaje enviado exitosamente.");
        } else {
            alert(data.error || "Error al enviar el mensaje");
        }
    } catch (error) {
        console.error("Error fatal:", error);
        alert("Error de conexión con el servidor");
    }
    
});