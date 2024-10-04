// const loadScript=async(src)=>{
//     return new Promise((resolve,reject)=>{
//         let script=document.createElement("script")
//         script.src=src
//         script.onload=()=>{
//             resolve(src+"Done Succcess")
//         }
//         document.head.append(script)
//     })
// }

//Problem NO 1
// let a=loadScript("https.//google.com")
// a.then((value)=>{

//     console.log(value)
// })

//Problem NO 2
// const main2=async()=>{
//     console.log(new Date().getMilliseconds())
//     let a=await loadScript("www.google.com")//proper url attch
//     console.log(a)
//     console.log(new Date().getMilliseconds())
// }
// main2()

//Problem NO 3
// let p=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(new Error('Plese Thsis is not acceptable'))
//         },3000)
//     })
// }

// let a= async()=>{
//     try {
//         let c=await p()
//         console.log(c)
//     } catch (error) {
//         console.log("Handle Error Succsfully")
//     }
// }
// a()

//PROBLRM 4
let p1=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10)
        },2000)
    })
}
let p2=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20)
        },1000)
    })
}
let p3=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(30)
        },3000)
    })
}
const run=async ()=>{
    let a1=await p1()
    console.log(a1)
    let a2=await p2()
    console.log(a2)
    let a3=await p3()
    console.log(a3)
    let a1a2a3=await Promise.all([a1,a2,a3])
    console.log(a1a2a3)
}
run()