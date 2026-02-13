const txt_name = document.getElementById("name") as HTMLInputElement;
const txt_email = document.getElementById("email") as HTMLInputElement;
const txt_message = document.getElementById("message") as HTMLTextAreaElement;
const btn_send = document.querySelector(".btn-submit") as HTMLButtonElement;
const url_send = import.meta.env.VITE_API_URL;
import Swal from 'sweetalert2';

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
        btn_send.disabled = true;
        btn_send.textContent = "ENVIANDO...";
        
        const response = await fetch(`${url_send}/contact/contact`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ContactJson),
            credentials: "include"
            
        });
                
        const data = await response.json();
        
        if (response.ok) {
            Swal.fire({
                    title: 'Mensaje entregado exitosamente',
                    text: 'Gracias por saludar. Pronto me pondré en contacto contacto contigo',
                    icon: 'success',
                    background: '#1e1e1e',
                    color: '#ffffff',      
                    confirmButtonColor: '#00d26a', 
                    confirmButtonText: 'De acuerdo'
                    });

            txt_name.value = ""
            txt_email.value = ""
            txt_message.value = ""
        } else {
            alert(data.error || "Error al enviar el mensaje");
            txt_name.textContent = ""
            txt_email.textContent = ""
            txt_message.textContent = ""
        }
    } catch (error) {
        console.error("Error fatal:", error);
        alert("Error de conexión con el servidor");
    }finally{
        btn_send.disabled = false;
        btn_send.textContent = "ENVIAR MENSAJE";
    }
    
});