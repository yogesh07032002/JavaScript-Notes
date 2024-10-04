//for each loop
let num=[2,3,4,5];
num.forEach((element)=>{
    console.log(element*element);
})

//Array.from
let name="Harry";
let arr=Array.from(name);
console.log(arr);

//for of
for(let i of num){
    console.log(i);
}
//for in-gives the key of the obj
for(let i1 in num){
    console.log(i1)
}