const todoTask=document.getElementById("todo-task")
const addBtn=document.getElementById("add-btn")
const todoItems=document.getElementById("todo-items")

addBtn.addEventListener("click",()=>{
    const value=todoTask.value
    // console.log(value);
    
    const li=document.createElement('li')
    const cross=document.createElement('button')
    cross.innerText= "X"
    console.log(cross);
    li.innerText=value
    li.appendChild(cross)
    
    console.log(li);
    
    todoItems.appendChild(li)
    todoTask.value=""
    cross.addEventListener('click',()=>{
        li.remove()
    })

    
})