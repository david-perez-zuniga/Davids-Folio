const pharses = ["Scalable Backends", "Clean Frontend", "My Dreams"];
const txt_role = document.querySelector(".role-text");
const btn_proyects = document.getElementById("btn-projects") as HTMLButtonElement
let actual_phare = pharses[0];
let i = 0;
let currentPharses = 0
let isDeleting = false;

setInterval(WritePhareses, 100);

function WritePhareses(){
    if (txt_role!== null){
        if(isDeleting !== false){
            i--
        }else{
            i++
        }
        txt_role.textContent = actual_phare.slice(0, i)
    }
    if (i > actual_phare.length){
        isDeleting = true         
    }
    if(i === 0 && isDeleting === true){
        isDeleting = false
        currentPharses = (currentPharses + 1) % pharses.length
        actual_phare = pharses[currentPharses]
    }
}

btn_proyects.addEventListener("click", (e)=>{
    e.preventDefault()
    window.location.replace("/Body/proyect_body.html")
})