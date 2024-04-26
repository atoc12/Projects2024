const TASK = []; // Guarda las tareas
var elementMove = null;
const libreta={ // Diccionario que guarda los elementos HTML en los que se va visualizar las tareas
    task:document.getElementById("task"),
    progress:document.getElementById("progress"),
    end:document.getElementById("end"),
};
function countUpdate (){
    document.getElementById("countTask").innerText=TASK.length;
}
function dropBoxAction () { // funcion que permite abrir el DropBox
    let status = this.getAttribute("data-open");
    this.setAttribute("data-open",status == "close" ? "open" : "close");   
};
function createComponent (form){ // Crea un componente
    const component = document.createElement("div");
    component.setAttribute("draggable","true");
    component.setAttribute("class","card-task");
    component.setAttribute("data-open","close");
    component.innerHTML=
    `
    <div class="col">
        <section class="row aling-center justify-between">
            <h1>
                ${form.tittle}
            </h1>

            <span>
                ${form.date.toLocaleDateString()}
            </span>
        </section>


    </div>

    <div class="card-task-container" draggable="false">
        <p>${form.description}</p>
    </div>
    <span class="card-task-date row justify-between">
        <span>
            ${form.date.toLocaleTimeString()}
        </span>
        <span class="card-arrow">
            >
        </span>
    </span>
    `;
    TASK.push({...form,body:component});
    countUpdate();
    return component;
};
function cloneEventsComponent (element){// retorna el elemento copiado con eventos predefinidos
    element.addEventListener("click",dropBoxAction);
    element.addEventListener("dragstart",(e)=>elementMove = element);
    element.querySelector(".card-task-container").addEventListener("click",e=>e.stopPropagation());
    return element;
};
function handleSubmit (e){//Ejecución del formulario
    try{
        e.preventDefault();// Elimina los eventos por defecto
        let form ={ // Guarda los valores del formulario en un diccionario
            tittle:e.target["titulo-form"].value,
            description:e.target["description-form"].value,
            date:new Date(),
        }

        if(form.tittle.length > 0 && form.tittle != " " ){
            let childClone = createComponent(form);
            childClone= cloneEventsComponent(childClone);
            libreta.task.append(childClone);
            document.getElementById("modal-primary").setAttribute("data-modal","close");
        }else{
            alert("Es necesario utilizar un titúlo");
        }
    }catch(Err){
        alert(Err.message);
    }
};
function dropTask (e,element){
    if (e.target == libreta[element] ) {
        let cloneElement = cloneEventsComponent(elementMove.cloneNode(true));
        e.target.append(cloneElement);
        elementMove.parentNode.removeChild(elementMove);
        elementMove = null;
    }
}
function removeTask (element){
    element.parentNode.removeChild(element);
    
}

document.getElementById("form-task").addEventListener("submit",handleSubmit);
for (let element in libreta) {
    libreta[element].addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    libreta[element].addEventListener("drop",e=>dropTask(e,element));
};