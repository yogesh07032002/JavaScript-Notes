class Employee{
    login(){
        console.log("Logout")
    }
    logout(){
        console.log("Login")
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`)
    }
}
class Programmer extends Employee{
    requestCoffee(x){
        console.log(`Empoloyee has requsted ${x} coffees`)
    }
    requestLeaves(leaves){
       // console.log(`Employee has requested ${leaves+1} leaves`)
       super.requestLeaves(4)
    }
}
let e=new Programmer()
e.login();
e.logout();
e.requestLeaves(5);