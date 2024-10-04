// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Resolved after 2 second")
//         resolve(50)
//     },2000)
// })

// p1.then((value)=>{
//     console.log(value);
//     let p2=new Promise((resolve, reject)=>{
//         setTimeout(()=>{resolve("Promise2")},2000)
//     })
//     return p2;
// }).then((value)=>{
//     console.log("Done")
// }).then((value)=>{
//     console.log("Fully done")
// })


//error inthis part copy harry code
const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = () => {
            resolve("Script has been loaded sir")
        }
        script.onerror = () => { reject(0) }

        
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")//
p1.then(() => {
    console.log(value)
}).catch((error)=>{
    console.log("We Are Really sorry! we cannot load it")
})