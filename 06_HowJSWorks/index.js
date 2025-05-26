// console.log("Hello");
// setTimeout(()=>{
//     console.log("Bye bye");
// },0)

// console.log("Hii");

// const obj={
//     name:"Rahul",
//     greet:function(){
//         console.log(`Hello ${this.name}`);
        
//     }
// }
// setTimeout((obj.greet),2000)

// setTimeout(obj.greet.bind(obj),2000)

console.log("hii");
setTimeout(()=>console.log('after 2 sec'),2);
Promise.resolve().then(()=>console.log('Resolved'));
setTimeout(()=>console.log('after 2 s'),2);
console.log("bye");




