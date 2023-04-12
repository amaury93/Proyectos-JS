const tasks = [];// aqui voy a almacenar cada una de las tareas que voy a ir ejecutando con la tecnica pomodoro
let time = 0; // a contar o llevar la cuenta regresiva
let timer = null;// va a tener asignado una funcion llama setInterval se va a ejecutar cada determinado tiempo
let timeBreak = null; // otro similar para el descanso
let current = null;// va a decir cual es la tarea actual que se esta ejecutado 

const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");

form.addEventListener('submit',e =>{
    e.preventDefault(); // cuando nosotros enviemos el formulario en realidad no se envie esto es con preventDefault
    if(itTask.value != ''){
        createTask(itTask.value);
        itTask.value = '';
    }
})

function createTask(value){
    const newTask = {
        id:(Math.random() * 100).toString(36).slice(3),
        title: value,
        completed: false
    }
}