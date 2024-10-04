async function yogesh() {
    

let delhiWeather=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("27 August")
    })
},4000)

let PuneWeather=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("21 Septmber")
    })
},5000);
// delhiWeather.then(alert)
console.log('fetching delhi weather')
let delhi=await delhiWeather
console.log('feched delhi weather'+delhi)
console.log('fetching pune weather')
let pune=await PuneWeather
console.log('fetched pune weather'+pune)
return [delhi,pune]

}
console.log("Welcome To SwiftNLift IT TECh")
let a=yogesh()
console.log(a)

//parllel execution allow with the help of async await