class Person{
    constructor(fname,lname){
        this.fname=fname
        this.lname=lname
    }
    getfullname(){
        return `${this.fname} ${this.lname}`
    }
};
const p1=new Person("piyush","garg")
const p2=new Person("Rahul","Raj")
console.log(p1.getfullname());

class A{
    funInA(){

    }
}
class B extends A{
    funInB(){

    }
}
//A ka proto type B me aa gaya
// B.__proto__=A.__proto__


