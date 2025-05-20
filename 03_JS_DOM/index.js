// console.log("Hello World");
// console.log(window.document);
// window.document.write("Hello from js")
function changebgColor(color){
    document.body.style.backgroundColor=color
}

const ThemeButton=document.getElementById("Theme")
console.log(ThemeButton);

ThemeButton.addEventListener('click',()=>{
    const currentColor=document.body.style.backgroundColor
    if(!currentColor || currentColor==='white'){
        changebgColor('Black')
    }
    else changebgColor('white')

})


