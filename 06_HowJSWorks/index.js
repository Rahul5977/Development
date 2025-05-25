// console.log("Hello");
// setTimeout(()=>{
//     console.log("Bye bye");
// },0)

// console.log("Hii");

const obj={
    name:"Rahul",
    greet:function(){
        console.log(`Hello ${this.name}`);
        
    }
}
setTimeout((obj.greet),2000)

setTimeout(obj.greet.bind(obj),2000)

