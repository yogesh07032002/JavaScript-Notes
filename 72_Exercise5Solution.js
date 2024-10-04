let a=[
    "Inintializing hack tool",
    "Connnecting to the instagram",
    "connecting to the server 1",
    "Connection failed. Retrying....",
    "Connecting to the server 2",
    "Connected Successfully",
    "UserName diagamberingole999",
    "Trying brout force",
    "Matched Successfully",
    "Accesing acccount",
    "Success"
]
const sleep=async(second)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {resolve(true)},second*1000)
            
    
    })
}

const showHack=async(message)=>{
    await sleep(2)
    console.log(message)
}
(async ()=>{
    for(let i=0;i<a.length;i++)
    {
        await showHack(a[i])
    }
})()