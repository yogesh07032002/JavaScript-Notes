let promise=new Promise(function(resolve,reject){
    alert("Hello");
    resolve(56)
})

console.log("Hello One")
setTimeout(function(){
    console.log("Hello in 2 sec")
},2000)

console.log("My name is "+"Hello 3")
console.log(promise)