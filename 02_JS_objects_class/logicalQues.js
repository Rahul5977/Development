Function.prototype.discribe=function(){
    console.log(`Function name is ${this.name}`);  
}

function greet(name){
    console.log(name);
    
}

greet.discribe("Rahul")
greet("Rahul")

function add(a,b){//function declaration
    return a+b;
}
const sub=function(a,b){//function expression 
    return a-b;
}

const mult=()=>{
    return a*b
}


//tiffin concept
function createCounter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
const counter=createCounter()
console.log(counter())

(function(){
    console.log("effi");
}) ()

