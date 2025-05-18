const person={
    x:10,
    firstName:"Rahul",
    lastName:"Raj",
    hasGf:false,
    fullName: function(){
        // return person.firstName+person.lastName
        return "Rahul Raj"
    }
}
console.log(person);
let p1={
    fname:"Rahul"
}
let p2=p1;
console.log(p2);
p2.fname="Raj"
console.log(p1);




