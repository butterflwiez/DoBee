let input = document.querySelector('#input');
let list = document.querySelector('#list');
let progressBar = document.querySelector('#progress');
let progressText = document.querySelector('#num');
let totalTasks = 0;
let completedTasks = 0;

input.addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        addItem(this.value)
        this.value=""
        saveitems()
    }
});

const updateProgress = () => {
    const progressPercent = totalTasks ? (completedTasks / totalTasks) * 100 : 0;
    progressBar.style.width = `${progressPercent}%`;
    progressText.textContent = `${completedTasks} / ${totalTasks}`;
};

let addItem=(input)=>{
    totalTasks++
    let listitem=document.createElement("li");
    listitem.innerHTML=`${input}<i></i>`;
    listitem.addEventListener("click", function(){
        if(!this.classList.contains('done')){
            completedTasks++;
        }
        else{
            completedTasks--;
        }
        this.classList.toggle('done');
        updateProgress();
    });

    listitem.querySelector("i").addEventListener("click", function(event){
        event.stopPropagation(); 
        listitem.remove();
        totalTasks--;
        if (listitem.classList.contains('done')) {
            completedTasks--;
        }
        updateProgress();
    });

    list.appendChild(listitem);
    updateProgress();
};





