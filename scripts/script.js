const presentButon = document.querySelector("#present__button");
const body = document.querySelector("body")
const popup = document.querySelector("#popup")

function presentShow(event){
    body.classList.add("active");
    popup.classList.add("active");
    popup.style.top = window.scrollY+"px";
    localStorage.setItem("popup",true)
}

presentButon.addEventListener("click",presentShow)
window.addEventListener("load",(event)=>{
    const isActive = localStorage.getItem("popup");
    if(isActive) presentShow();
}) 