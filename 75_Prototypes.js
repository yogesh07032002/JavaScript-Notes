let a={
    name:"Yogesh",
    language:"Javascript",
    run:()=>{
        alert('Self Run')
    }
}
console.log(a)

let p={
    run:()=>{
        alert("run")
    }
}

p.__proto__={
    name:"PRMCEAM"
}

a.__proto__=p
a.run()
console.log(a.name)