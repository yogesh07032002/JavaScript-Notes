class animal{
    constructor(name){
        this._name=name
    }
    fly(){
        alert("Flying")
    }
    get name(){
      return this._name
    }
    
    set name(newName){
        this._name=newName
    }

}
let a=new animal("Bruno")
a.fly()
console.log(a.name)
a.name='JAck'
console.log(a.name)