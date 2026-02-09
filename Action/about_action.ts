const progress_bar = document.querySelectorAll(".progress-fill");

progress_bar.forEach(bar =>{ 
    setTimeout(() => {
        (bar as HTMLElement).style.width = `${bar.getAttribute("data-target")}`
    }, 100);
    
});