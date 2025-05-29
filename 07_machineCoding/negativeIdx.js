let arr=[1,2,3,4,5,6]
//to enable negative index
function negativeIndex(arr){
    return new Proxy(arr,{
        get(target,prop){
            //console.log(target[prop]);
            let index=Number(prop)
            if(index<0){
                index=index+target.length
            }
            return target[index]
            
        },set(target,prop,value){
            let idx=Number(prop)
            if(idx<0) idx=idx+target.length
            target[idx]=value
            return true
        }
    })
}
newArr=negativeIndex(arr)
console.log((newArr[0]));
newArr[-1]=10
console.log(newArr[-1]);

