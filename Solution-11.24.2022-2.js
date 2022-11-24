class Contractor{
    constructor(name,role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    sayHello(){
        console.log(`Hello, my name is ${this._name} and I am on the ${this._role} at #100Devs!`)
    }
    sayBye(){
        console.log('It has been a pleasure working with you!')
    }
}
class Front extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, my name is ${this._name} and I am on the ${this._role} team at 100Devs using ${this._tech}`)
    }
}
class Back extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, my name is ${this._name} and I am on the ${this._role} team at 100Devs using ${this._tech}`)
    }
}
let Bob = new Contractor('The Machine', 'Front End')
let Sam = new Front('The Punisher', 'Front-end', 'React')
let Renee = new Back('The Resolver','Back-end','Node')

let agencyList = [Bob,Sam,Renee]

for(person of agencyList){
    person.sayHello()
}