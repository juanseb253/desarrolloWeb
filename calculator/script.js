const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
let estado = true;
function numero(boton, pantalla){
    if(boton.textContent == "C"){
        pantalla.textContent = 0;
        estado = true;
    }

    else if(boton.id == "borrar"){
        pantalla.textContent = pantalla.textContent.slice(0,-1);
        if (pantalla.textContent == ""){
            pantalla.textContent = 0;
        }
    }

    else if(boton.id == "igual"){
        try{
            pantalla.textContent = eval(pantalla.textContent); 
        }catch{
            pantalla.textContent = "Error";
        }
        if (pantalla.textContent.length > 13){
            pantalla.textContent = pantalla.textContent.toFixed(13 - pantalla.textContent.indexOf("."));
        }
        estado = true;
    }
    else if(boton.textContent == "." && pantalla.textContent.slice(-1) in [0,1,2,3,4,5,6,7,8,9]){
        pantalla.textContent += boton.textContent
        estado = false;
    }
    else if (estado && boton.textContent != 0 && boton.textContent != "." ){
        pantalla.textContent = boton.textContent;
        estado = false;
    }
    else if(boton.textContent != "."){
        
        pantalla.textContent += boton.textContent;
    }
}

botones.forEach((x) => x.addEventListener('click', () => numero(x,pantalla)));