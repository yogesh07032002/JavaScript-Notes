alert("Enter The Name of Your Company");
let a=prompt("Enter a Here","999");
a=Number.parseInt(a);
alert("you enter a type of "+(typeof a))
let write=confirm("Do you want to add or write on the page");
if(write){
    document.write(a)
}
else{
    document.write("Please allow me to add content");
}
