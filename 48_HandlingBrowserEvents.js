let x=function(e){
    console.log(e.target)
    console.log(e)
    console.log(e.type,event.clientX, event.clientY);
   // alert("H1");
}

let y=function(e){
    alert("h2")
}

btn.addEventListener('click',     x);
// btn.addEventListener('click',y);


// let a=prompt("What is your faviour number")
// if(a=="2"){
//     btn.removeEventListener('click',x)
// }