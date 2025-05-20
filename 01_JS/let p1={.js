let p1={
    fname:"Rahul",
    lname:"Raj"
}
let p2={
    ...p1//spread operator->inner objects par kaam ni krta 
    //shallow copy ban gaya
}
console.log(p1);
console.log(p2);
p1.fname="Neha"
console.log(p2);

console.log(p1);

//for deep copy
// stringify p1 and then convert to json
const p1KaString=JSON.stringify(p1)
p2=JSON.parse(p1KaString)
console.log(p1);

console.log(p2);




