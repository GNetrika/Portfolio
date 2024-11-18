const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",() => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
window.addEventListener("scroll",() => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
    document.querySelector(".style-switcher").classList.remove("open");

    }
    
})
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActivestyle(color)
{
   alternateStyles.forEach((style) => {
    if(color === style.getAttribute("title"))
    {
        style.removeAttribute("disabled");
    }
    else
    {
        style.Attribute("disabled","true");

    }
   })

}
const dayNight=document.querySelector(".day-night");
window.addEventListener("load",() => {
    if(document.body.classList("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");

    }
})