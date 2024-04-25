const Task = []; // Guarda las tareas
var elementMove = null;
const libreta={ // Diccionario que guarda los elementos HTML en los que se va visualizar las tareas
    task:document.getElementById("task"),
    progress:document.getElementById("progress"),
    end:document.getElementById("end"),
}


function dropBoxAction () {
    let status = this.getAttribute("data-open");
    this.setAttribute("data-open",status == "close" ? "open" : "close");
    
}
function createComponent (form){
    const component = document.createElement("div");
    component.setAttribute("draggable","true");
    component.setAttribute("class","card-task");
    component.setAttribute("data-open","close");
    component.innerHTML=`
    <div>
        <h1>
            ${form.tittle}
        </h1>
    </div>
    <div>
        <p>${form.description}</p>
    </div>
`;

    return component;
}
function cloneEventsComponent (element){
    element.addEventListener("click",dropBoxAction);
    element.addEventListener("dragstart",(e)=>elementMove = element);
    return element;
}




document.getElementById("form-task").addEventListener("submit",(e)=>{ // Escucha a qué se haya enviado los datos
    try{
        e.preventDefault();// Elimina los eventos por defecto
        let form ={ // Guarda los valores del formulario en un diccionario
            tittle:e.target["titulo-form"].value,
            description:e.target["description-form"].value,
            date:Date.now(),
        }

        let childClone = createComponent(form);
        childClone= cloneEventsComponent(childClone);
        
        libreta.task.append(childClone);


    }catch(Err){
        alert(Err.message);
    }
})


for (let element in libreta) {
    libreta[element].addEventListener("dragover", (e) => e.preventDefault());
    libreta[element].addEventListener("drop", (e) => {
        if (elementMove) {
            let cloneElement = cloneEventsComponent(elementMove.cloneNode(true));
            e.target.append(cloneElement);
            elementMove.parentNode.removeChild(elementMove);
            elementMove = null;
        }
    });
}