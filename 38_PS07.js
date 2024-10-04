document.getElementsByTagName("nav")[0].firstElementChild.style.color="white";
document.getElementsByTagName("nav")[0].firstElementChild.style.color="green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color="Orange";

Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    element.style.background="cyan";
})