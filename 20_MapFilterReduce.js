let arr=[45,23,21];
let a=arr.map((value,index,array)=>{//map gives the new arrays
    console.log(value,index,array);
    return value+1;
})
console.log(a)

//filter
let arr2=[40,3,40,2,5];
let a2=arr2.filter((a)=>{
    return a<10
})
console.log(a2)

//reduce
let arr3=[1,2,3,5,6];
let a3= arr3.reduce((h1,h2)=>{
    return h1+h2;
});
console.log(a3);