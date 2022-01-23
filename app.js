const footer=document.querySelector(".footer");
const btn=document.querySelector(".btn-getstarted-large");

btn.addEventListener('mouseover', (e)=>{
    footer.style.opacity=".7";
    btn.addEventListener("mouseout", (e)=>{
        footer.style.opacity="";
    })

});

