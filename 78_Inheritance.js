class Animal{
    constructor(name,color)
    {
        this.name
        this.color
    }
    run(){
        console.log(this.name+" "+"is running")
    }
    shout(){
        console.log(this.name+"is shouting")
    }
}
class Monkey extends Animal{
    eat(){
        console.log(this.name+"Banana")
    }

}
let a=new Animal("MMM","white")
let b=new Monkey("Chimpu","black")
a.run()
a.shout()
b.eat()
    
  