alert('Seja bem vindo ao meu projeto!')

window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit' , (e) => {
        e.preventDefault();

        const task = input.value;
        
        if (!task) {
            alert("Por favor, insira uma tarefa");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

       const task_actions_el = document.createElement("div");
       task_actions_el.classList.add("actions");

       const task_editar_el = document.createElement("button");
       task_editar_el.classList.add("editar");
       task_editar_el.innerHTML = "Editar";

       const task_excluir_el = document.createElement ("button");
       task_excluir_el.classList.add("excluir");
       task_excluir_el.innerHTML = "Excluir";

       task_actions_el.appendChild(task_editar_el);
       task_actions_el.appendChild(task_excluir_el);

       task_el.appendChild(task_actions_el);
       
       list_el.appendChild(task_el);

       input.value = "";

       task_editar_el.addEventListener('click' , () => {
            if (task_editar_el.innerText.toLowerCase() == 
            "editar") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_editar_el.innerText = "Save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_editar_el.innerText = "Editar";
            }
        });

        task_excluir_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });

    })
})
