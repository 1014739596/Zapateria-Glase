/*=========================================
        SISTEMA GLASÉ
        MÓDULO ARREGLOS
=========================================*/


//==============================
// MENÚ ACTIVO
//==============================

const menu = document.querySelectorAll(".sidebar li");

menu.forEach(item => {

    item.addEventListener("click", () => {

        menu.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});


//==============================
// BOTÓN NUEVO ARREGLO
//==============================

const nuevo = document.getElementById("nuevo");

nuevo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


//==============================
// BOTÓN GUARDAR
//==============================

const guardar = document.querySelector(".guardar");

guardar.addEventListener("click", () => {

    alert("El arreglo se registrará correctamente.");

});


//==============================
// BOTÓN LIMPIAR
//==============================

const limpiar = document.querySelector(".cancelar");

limpiar.addEventListener("click", () => {

    alert("Formulario limpiado.");

});


//==============================
// BUSCADOR
//==============================

const buscador = document.getElementById("buscar");

buscador.addEventListener("keyup", () => {

    let filtro = buscador.value.toLowerCase();

    let filas = document.querySelectorAll("tbody tr");

    filas.forEach(fila => {

        let texto = fila.innerText.toLowerCase();

        if (texto.indexOf(filtro) > -1) {

            fila.style.display = "";

        } else {

            fila.style.display = "none";

        }

    });

});


//==============================
// BOTONES EDITAR
//==============================

const editar = document.querySelectorAll(".editar");

editar.forEach(btn => {

    btn.addEventListener("click", () => {

        alert("Aquí se abrirá la edición del arreglo.");

    });

});


//==============================
// BOTONES ELIMINAR
//==============================

const eliminar = document.querySelectorAll(".eliminar");

eliminar.forEach(btn => {

    btn.addEventListener("click", () => {

        let respuesta = confirm("¿Desea eliminar este arreglo?");

        if (respuesta) {

            btn.parentElement.parentElement.remove();

        }

    });

});


//==============================
// ANIMACIÓN DE ENTRADA
//==============================

window.addEventListener("load", () => {

    const formulario = document.querySelector(".formulario");

    const tabla = document.querySelector(".tabla");

    formulario.style.opacity = "0";
    tabla.style.opacity = "0";

    formulario.style.transform = "translateY(30px)";
    tabla.style.transform = "translateY(30px)";

    setTimeout(() => {

        formulario.style.transition = ".6s";
        formulario.style.opacity = "1";
        formulario.style.transform = "translateY(0px)";

    }, 200);

    setTimeout(() => {

        tabla.style.transition = ".6s";
        tabla.style.opacity = "1";
        tabla.style.transform = "translateY(0px)";

    }, 450);

});


//==============================
// EFECTO INPUTS
//==============================

const inputs = document.querySelectorAll("input, select, textarea");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.style.border = "2px solid #6D4C41";

    });

    input.addEventListener("blur", () => {

        input.style.border = "1px solid #ddd";

    });

});


//==============================
// HOVER BOTONES
//==============================

const botones = document.querySelectorAll("button");

botones.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-2px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";

    });

});


//==============================
// FECHA ACTUAL AUTOMÁTICA
//==============================

const fechaIngreso = document.querySelector('input[type="date"]');

if (fechaIngreso) {

    let hoy = new Date().toISOString().split("T")[0];

    fechaIngreso.value = hoy;

}


//==============================
// RELOJ EN EL HEADER
//==============================

const header = document.querySelector("header");

const reloj = document.createElement("span");

reloj.style.marginLeft = "20px";
reloj.style.color = "#6D4C41";
reloj.style.fontWeight = "600";

header.appendChild(reloj);

function actualizarHora(){

    const fecha = new Date();

    reloj.innerHTML = fecha.toLocaleString();

}

setInterval(actualizarHora,1000);

actualizarHora();


//==============================
// CONTADOR DE REGISTROS
//==============================

const filas = document.querySelectorAll("tbody tr");

console.log("Arreglos registrados: " + filas.length);


//==============================
// MENSAJE DE BIENVENIDA
//==============================

setTimeout(()=>{

    console.log("Bienvenido al módulo de Arreglos.");

},500);


//==============================
// FIN DEL SCRIPT
//==============================