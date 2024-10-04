//1
// let arr=[1,3,5,7];
// let a=prompt("enter a number");
// a=Number.parseInt(a);
// arr.push(a);
// console.log(arr);

//2
// let arr=[1,3,5,7];
// let a;
// do{
//     a=prompt("enter a number");
//     a=Number.parseInt(a);
//     arr.push(a);
// }while(a!=0);
// console.log(arr);

//3
// let arr=[1,2,3,5,66,7,88];
// let n=arr.filter((x)=>{
//     return x%10==0;
// })// console.log(n)
// //4
// let arr=[1,2,3,5,66,7,88];
// let n=arr.map((x)=>{
//     return x*x;
// })

//5

let arr=[1,2,3,4,5,6,7];
let n=arr.reduce((X1,X2)=>{
    return X1*X2;
})
console.log(n)