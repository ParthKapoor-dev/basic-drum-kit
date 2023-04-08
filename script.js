const allBoxes = document.querySelectorAll(".box");
const allAudio = document.querySelectorAll("audio");
window.addEventListener("keydown",(e)=>{
    
    allBoxes.forEach(box =>{
        if(e.key == box.getAttribute("data-key"))
            box.setAttribute("class","box onclick");
        setTimeout(()=>{box.setAttribute("class","box") },100)
    })
    allAudio.forEach(aud =>{
        if(e.key == aud.getAttribute('data-key'))
        {
            aud.currentTime = 0;
            aud.play();
            console.log(aud)
        }
    })
    
})
