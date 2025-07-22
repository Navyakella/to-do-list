const input=document.querySelector("#input");
const tasks=document.querySelector("#list");
const addtask=()=>{
    if(input.value===""){
        alert("please add a task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        tasks.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
        savedata();
    }
    input.value="";
}
tasks.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
});
const savedata=()=>{
    localStorage.setItem("tasks",tasks.innerHTML);
}
const displaydata=()=>{
    tasks.innerHTML=localStorage.getItem("tasks");
}
displaydata();