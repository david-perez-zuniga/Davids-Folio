const btn_demo = document.querySelector(".btn-card") as HTMLAnchorElement
import Swal from 'sweetalert2';

btn_demo.addEventListener("click", (e) =>{
    e.preventDefault()
    Swal.fire({
            title: 'Upss!! Aún está en desarrollo',
            text: 'No te preocupes. Proximamente podrás ver en lo que estoy trabajando',
            icon: 'info',
            background: '#1e1e1e',
            color: '#ffffff',      
            confirmButtonColor: '#00d26a', 
            confirmButtonText: 'De acuerdo'
        });
})