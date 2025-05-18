const teas ={
    name:"Lemon tea",
    type:"Green",
    caffine:"Low"
}
console.log(teas.name,teas.type)
teas["origin"]="India"
console.log(teas);

teas["caffine"]="Medium"
console.log(teas);

//remove type property
delete teas.type

//check if origin prop is present 
console.log("origin" in teas);

for (const key in teas) {
    const element = teas[key];
    console.log(element);   
}
//create a copy of teas object

const teasCopy={...teas}//shallow copy





