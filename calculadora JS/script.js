const display = document.querySelector("#display")
const buttons = document.querySelectorAll("button")

buttons.forEach((item)=>{ /*el item ya tiene toda la funcion de todos los botones por que la estamos mapeando con el forEach*/
    item.onclick=() =>{
        if(item.id=="clear"){
            display.innerText="";
        }else if(item.id=="backspace"){
            let string = display.innerText.toString()/* toString: conviertes a texto */
            display.innerText=string.substr(0,string.length-1)
            
        }else if(display.innerText != ""&& item.id=="equal"){
            //let cadena = "2+2"  eval lo va a tomar como operacion aritmetica asi sea una cadena de texto
            display.innerText=eval(display.innerText)
        }else if(display.innerText=="" && item.id=="equal"){
            display.innerText="Null";
            setTimeout(()=>(display.innerText=""),2000);
        }else{
            display.innerText+=item.id;
        }
    }
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark = true;
themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark")
    themeToggleBtn.classList.toggle(".active")
    isDark = !isDark;
}