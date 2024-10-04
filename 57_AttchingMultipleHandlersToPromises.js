let p1=new Promise((resolve,reject)=>{
  //  alert("Hey I am not resolveddd")
    setTimeout(()=>{
        resolve(1)
    },2000)
})
p1.then(()=>{
    console.log("Yogesh")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve (4);
        },5000)
    })
}).then((value)=>{console.log(value)})
p1.then(()=>{
    console.log("Congo The promise is now resolved")
})

.then(()=>{
    console.log("Congratulation this promise is now resolved")
})
