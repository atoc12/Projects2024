

const Task = []; // Guarda las tareas


const libreta={ // Diccionario que guarda los elementos HTML en los que se va visualizar las tareas
    task:document.getElementById("task"),
    progress:document.getElementById("progress"),
    end:document.getElementById("end"),
}

function dropBoxAction () {
    let status = this.getAttribute("data-open");
    this.setAttribute("data-open",status == "close" ? "open" : "close");
    
}

const component = document.createElement("div");
component.setAttribute("class","card-task");
component.setAttribute("data-open","close");



document.getElementById("form-task").addEventListener("submit",(e)=>{ // Escucha a qué se haya enviado los datos
    try{

        e.preventDefault();// Elimina los eventos por defecto

        let form ={ // Guarda los valores del formulario en un diccionario
            tittle:e.target["titulo-form"].value,
            description:e.target["description-form"].value,
            date:Date.now(),
        }

        let childClone = component.cloneNode(true);

        childClone.addEventListener("click",dropBoxAction);

        childClone.innerHTML=`

            <div>
                <h1>
                    ${form.tittle}
                </h1>
                
            </div>

            <div>
                
                <p>${form.description}</p>
            </div>

        `;

        libreta.task.append(childClone);


    }catch(Err){
        alert(Err.message);
    }
})


