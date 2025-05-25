// function fun(value){
//     if(value){
//         console.log("True");
        
//     }else console.log("False");
    
// }
// fun([])
// fun(0)
// fun("")
// fun("A")
// fun({})
// fun(null)
// fun(undefined)
// fun(false)

const p1={
    name:"Rahul",
    greet: function(){
        console.log(`Hello ${this.name}`);
        
    }
}
const p2={
    name:"Raj"
}
p1.greet.call(p2)

const bindGreet=p1.greet.bind(p2)//bind return a function
bindGreet()






