let p1=new Promise((resolve,reject)=>{
    console.log("Promise is done ")
    setTimeout(()=>{
        console.log("I am promise ");
        resolve(true)
        //reject(new Error("I am an error"))
    },5000)
})
let p=new Promise((resolve,reject)=>{
    console.log("Promise is pending ")
    setTimeout(()=>{
        console.log("I am promise and i am rejected");
        //resolve(true)
        reject(new Error("I am an error"))
    },5000)
})

p1.then((value)=>{
    console.log(value);
})
p.catch((error)=>{
    console.log("Some Error occures")
})
