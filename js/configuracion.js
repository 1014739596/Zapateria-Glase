/*=========================================
        SISTEMA GLASÉ
     MÓDULO CONFIGURACIÓN
=========================================*/


//======================================
// MENÚ ACTIVO
//======================================

const menu = document.querySelectorAll(".sidebar li");

menu.forEach(item => {

    item.addEventListener("click", () => {

        menu.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});


//======================================
// ANIMACIÓN DE ENTRADA
//======================================

window.addEventListener("load", () => {

    const secciones = document.querySelectorAll(
        ".perfil, .seguridad, .preferencias, .informacion, .acciones"
    );

    secciones.forEach((seccion, index) => {

        seccion.style.opacity = "0";
        seccion.style.transform = "translateY(30px)";

        setTimeout(() => {

            seccion.style.transition = ".6s";
            seccion.style.opacity = "1";
            seccion.style.transform = "translateY(0px)";

        }, index * 180);

    });

});


//======================================
// EFECTO INPUTS
//======================================

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.style.border = "2px solid #6D4C41";

    });

    input.addEventListener("blur", () => {

        input.style.border = "1px solid #ddd";

    });

});


//======================================
// BOTÓN GUARDAR
//======================================

const guardar = document.querySelector(".guardar");

guardar.addEventListener("click", () => {

    alert("Los cambios se guardarán correctamente.");

});


//======================================
// BOTÓN RESTABLECER
//======================================

const restablecer = document.querySelector(".restablecer");

restablecer.addEventListener("click", () => {

    let confirmar = confirm("¿Desea restablecer la configuración?");

    if(confirmar){

        document.querySelectorAll("input").forEach(input=>{

            if(input.type === "text" ||
               input.type === "email" ||
               input.type === "password"){

                input.value="";

            }

            if(input.type==="checkbox"){

                input.checked=false;

            }

        });

    }

});


//======================================
// BOTÓN CERRAR SESIÓN
//======================================

const cerrar = document.querySelector(".cerrar");

cerrar.addEventListener("click",()=>{

    let salir = confirm("¿Desea cerrar sesión?");

    if(salir){

        window.location.href="../index.html";

    }

});


//======================================
// EFECTO CHECKBOX
//======================================

const checks = document.querySelectorAll("input[type='checkbox']");

checks.forEach(check=>{

    check.addEventListener("change",()=>{

        if(check.checked){

            console.log("Opción activada");

        }

        else{

            console.log("Opción desactivada");

        }

    });

});


//======================================
// EFECTO BOTONES
//======================================

const botones = document.querySelectorAll("button");

botones.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-3px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0px)";

    });

});


//======================================
// RELOJ
//======================================

const header = document.querySelector("header");

const reloj = document.createElement("span");

reloj.style.float = "right";
reloj.style.fontWeight = "600";
reloj.style.color = "#6D4C41";

header.appendChild(reloj);

function actualizarHora(){

    const fecha = new Date();

    reloj.innerHTML = fecha.toLocaleString("es-CO");

}

setInterval(actualizarHora,1000);

actualizarHora();


//======================================
// EFECTO TABLA
//======================================

const filas = document.querySelectorAll("table tr");

filas.forEach(fila=>{

    fila.addEventListener("mouseenter",()=>{

        fila.style.background="#f5f5f5";

    });

    fila.addEventListener("mouseleave",()=>{

        fila.style.background="white";

    });

});


//======================================
// EFECTO TARJETAS
//======================================

const tarjetas = document.querySelectorAll(
".perfil, .seguridad, .preferencias, .informacion"
);

tarjetas.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-4px)";

        card.style.boxShadow="0 12px 25px rgba(0,0,0,.12)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

        card.style.boxShadow="0 8px 20px rgba(0,0,0,.08)";

    });

});


//======================================
// CONTADOR DE OPCIONES ACTIVAS
//======================================

function opcionesActivas(){

    let activas = document.querySelectorAll(
    "input[type='checkbox']:checked").length;

    console.log("Opciones activas: " + activas);

}

checks.forEach(check=>{

    check.addEventListener("change",opcionesActivas);

});

opcionesActivas();


//======================================
// MENSAJE DE BIENVENIDA
//======================================

setTimeout(()=>{

    console.log("Bienvenido al módulo Configuración.");

},500);


//======================================
// INFORMACIÓN DEL SISTEMA
//======================================

console.log("=================================");
console.log(" Sistema GLASÉ");
console.log(" Módulo Configuración");
console.log(" Versión 1.0");
console.log("=================================");


//======================================
// FIN DEL SCRIPT
//======================================