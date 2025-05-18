// const arr=[1,2,3]
// console.log(arr.__proto__)
// console.log(Array.prototype);
// const str="Rahul"
// Array.prototype.piyush=function(){
//     console.log("Hacked");
    
// }
// console.log(arr.piyush());

//writing polyfill 
const arr=[1,2,3,4,5]
arr.forEach(function(value,index){
    console.log(`value at index ${index}: ${value}`);
    
});

if(!Array.prototype.myForEach){
    Array.prototype.myForEach=function(userFn){
        const oriArray=this //current obj ki taraf point kr rha h
        for(let i=0;i<oriArray.length;i++){
            userFn(oriArray[i],i);
            
        }
    }
}

arr.myForEach(function(value,index){
    console.log(`value at index ${index}: ${value}`);

})

if(!Array.prototype.myMap){
    Array.prototype.myMap=function(userFn){
        const ans=[]
        for(let i=0;i<this.length;i++){
            
                const value=userFn(this[i],i);
                ans.push(value)
            
            
            
        }
        return ans;
    }
}

const n=arr.myMap((e)=>e*2)
console.log(n);

//filter 
//signature : new array return krta h


