const todo_list = []

render_todo();

document.querySelector('.add_button').addEventListener('click', ()=> {
    add_todo();
})



function add_todo(){
    const name = document.querySelector('.input_todo').value;
    if(name!=='')
    {
        const date = document.querySelector('.js-date').value;
        todo_list.push({name, date});
        document.querySelector('.input_todo').value='';

    }
    else
        alert("Please, fill the field");
    render_todo();
}

function render_todo(){
    let todo='';

    todo_list.forEach((elem, i) => {
        const {name, date} = elem;
        // const name=todo_list[i].name;
        // const date=todo_list[i].date;
        todo += 
        `<div>${name}</div>
        <div>${date}</div>
        <button class ="del_button">
            Delete
        </button>`;
    });

    document.querySelector('.container').innerHTML=todo; 

    document.querySelectorAll('.del_button').forEach((button, i)=>{
        button.addEventListener('click', ()=> {
            console.log(todo_list);
            todo_list.splice(i, 1);
            render_todo();
        })
    }
    );
        
}

function delete_todo(i){
    todo_list.splice(i, 1);
    render_todo();
}

function enter_add(event){
    if(event.key==="Enter")
        add_todo();
}