/*=========================================
        SISTEMA GLASÉ
        DASHBOARD
=========================================*/


//=========================================
// MENÚ ACTIVO
//=========================================

const menu = document.querySelectorAll(".sidebar li");

menu.forEach(item => {

    item.addEventListener("click", () => {

        menu.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});


//=========================================
// ANIMACIÓN DE ENTRADA
//=========================================

window.addEventListener("load", () => {

    const paneles = document.querySelectorAll(".panel");

    paneles.forEach((panel,index)=>{

        panel.style.opacity="0";
        panel.style.transform="translateY(30px)";

        setTimeout(()=>{

            panel.style.transition=".6s";
            panel.style.opacity="1";
            panel.style.transform="translateY(0px)";

        },index*180);

    });

});


//=========================================
// RELOJ
//=========================================

const header = document.querySelector("header");

const reloj = document.createElement("span");

reloj.style.marginLeft="20px";
reloj.style.fontWeight="600";
reloj.style.color="#6D4C41";
reloj.style.fontSize="15px";

header.appendChild(reloj);

function actualizarHora(){

    const fecha = new Date();

    reloj.innerHTML = fecha.toLocaleString("es-CO");

}

setInterval(actualizarHora,1000);

actualizarHora();


//=========================================
// CONTADORES ANIMADOS
//=========================================

const contadores = document.querySelectorAll(".card h2");

contadores.forEach(contador=>{

    const texto = contador.innerText;

    const objetivo = parseInt(texto.replace(/\D/g,""));

    if(isNaN(objetivo)) return;

    let numero = 0;

    const incrementar = ()=>{

        const paso = Math.ceil(objetivo/40);

        if(numero < objetivo){

            numero += paso;

            if(numero > objetivo){

                numero = objetivo;

            }

            if(texto.includes("$")){

                contador.innerText="$"+numero.toLocaleString();

            }

            else{

                contador.innerText=numero;

            }

            setTimeout(incrementar,30);

        }

    }

    incrementar();

});


//=========================================
// EFECTO TARJETAS
//=========================================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


//=========================================
// CHART.JS
//=========================================

const ctx = document.getElementById("graficaVentas");

if(ctx){

new Chart(ctx,{

    type:"bar",

    data:{

        labels:[

            "Ene",

            "Feb",

            "Mar",

            "Abr",

            "May",

            "Jun",

            "Jul"

        ],

        datasets:[{

            label:"Ventas",

            data:[

                18,

                25,

                20,

                30,

                35,

                42,

                38

            ],

            backgroundColor:[

                "#6D4C41",

                "#8D6E63",

                "#A1887F",

                "#5D4037",

                "#795548",

                "#8D6E63",

                "#6D4C41"

            ],

            borderRadius:8

        }]

    },

    options:{

        responsive:true,

        maintainAspectRatio:false,

        plugins:{

            legend:{

                display:false

            }

        },

        scales:{

            y:{

                beginAtZero:true,

                ticks:{

                    stepSize:10

                }

            }

        }

    }

});

}


//=========================================
// EFECTO USUARIO
//=========================================

const usuario = document.querySelector(".usuario");

if(usuario){

usuario.addEventListener("mouseenter",()=>{

    usuario.style.transform="translateY(-4px)";

});

usuario.addEventListener("mouseleave",()=>{

    usuario.style.transform="translateY(0px)";

});

}


//=========================================
// MENSAJE DE BIENVENIDA
//=========================================

setTimeout(()=>{

    console.log("=================================");
    console.log(" Sistema GLASÉ");
    console.log(" Panel Principal");
    console.log(" Bienvenido Administrador");
    console.log("=================================");

},500);
//=========================================
// EFECTO TABLAS
//=========================================

const filas = document.querySelectorAll("tbody tr");

filas.forEach(fila=>{

    fila.addEventListener("mouseenter",()=>{

        fila.style.background="#F9F9F9";

    });

    fila.addEventListener("mouseleave",()=>{

        fila.style.background="white";

    });

});


//=========================================
// EFECTO ALERTAS
//=========================================

const alertas = document.querySelectorAll(".alertas li");

alertas.forEach(alerta=>{

    alerta.addEventListener("mouseenter",()=>{

        alerta.style.transform="translateX(8px)";

    });

    alerta.addEventListener("mouseleave",()=>{

        alerta.style.transform="translateX(0px)";

    });

});


//=========================================
// ACTIVIDAD RECIENTE
//=========================================

const actividades = document.querySelectorAll(".actividad li");

actividades.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.paddingLeft="15px";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.paddingLeft="0px";

    });

});


//=========================================
// ANIMACIÓN SIDEBAR
//=========================================

const enlaces = document.querySelectorAll(".sidebar a");

enlaces.forEach(enlace=>{

    enlace.addEventListener("mouseenter",()=>{

        enlace.style.paddingLeft="22px";

    });

    enlace.addEventListener("mouseleave",()=>{

        enlace.style.paddingLeft="15px";

    });

});


//=========================================
// ANIMACIÓN FOOTER
//=========================================

const footer = document.querySelector("footer");

if(footer){

footer.addEventListener("mouseenter",()=>{

    footer.style.transform="translateY(-3px)";

});

footer.addEventListener("mouseleave",()=>{

    footer.style.transform="translateY(0px)";

});

}


//=========================================
// NOTIFICACIONES SIMULADAS
//=========================================

const mensajes = [

"Nuevo cliente registrado.",

"Se registró un nuevo arreglo.",

"Inventario actualizado.",

"Mercancía agregada correctamente.",

"Reporte generado.",

"Trabajo entregado exitosamente."

];

function notificacion(){

    const mensaje = mensajes[Math.floor(Math.random()*mensajes.length)];

    console.log("🔔 "+mensaje);

}

setInterval(notificacion,20000);


//=========================================
// EFECTO TÍTULOS
//=========================================

const titulos = document.querySelectorAll(".titulo h2");

titulos.forEach(titulo=>{

    titulo.addEventListener("mouseenter",()=>{

        titulo.style.color="#8D6E63";

    });

    titulo.addEventListener("mouseleave",()=>{

        titulo.style.color="#6D4C41";

    });

});


//=========================================
// EFECTO ICONOS
//=========================================

const iconos = document.querySelectorAll(".card i");

iconos.forEach(icono=>{

    icono.addEventListener("mouseenter",()=>{

        icono.style.transform="rotate(12deg) scale(1.2)";

    });

    icono.addEventListener("mouseleave",()=>{

        icono.style.transform="rotate(0deg) scale(1)";

    });

});


//=========================================
// SCROLL SUAVE
//=========================================

document.documentElement.style.scrollBehavior="smooth";


//=========================================
// EFECTO PANELES
//=========================================

const paneles = document.querySelectorAll(".panel");

paneles.forEach(panel=>{

    panel.addEventListener("mouseenter",()=>{

        panel.style.boxShadow="0 15px 30px rgba(0,0,0,.15)";

    });

    panel.addEventListener("mouseleave",()=>{

        panel.style.boxShadow="0 8px 20px rgba(0,0,0,.08)";

    });

});


//=========================================
// ANIMACIÓN DE APARICIÓN
//=========================================

window.addEventListener("scroll",()=>{

    const elementos = document.querySelectorAll(".panel");

    elementos.forEach(elemento=>{

        const posicion = elemento.getBoundingClientRect().top;

        if(posicion < window.innerHeight-80){

            elemento.style.opacity="1";

            elemento.style.transform="translateY(0px)";

        }

    });

});


//=========================================
// RESALTAR TARJETA
//=========================================

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        cards.forEach(c=>{

            c.style.border="none";

        });

        card.style.border="2px solid #6D4C41";

    });

});


//=========================================
// EFECTO TABLAS
//=========================================

const tablas = document.querySelectorAll("table");

tablas.forEach(tabla=>{

    tabla.addEventListener("mouseenter",()=>{

        tabla.style.transition=".3s";

        tabla.style.transform="scale(1.01)";

    });

    tabla.addEventListener("mouseleave",()=>{

        tabla.style.transform="scale(1)";

    });

});


//=========================================
// CARGA DEL SISTEMA
//=========================================

window.onload = ()=>{

    console.log("--------------------------------");

    console.log("GLASÉ");

    console.log("Sistema cargado correctamente.");

    console.log("Dashboard inicializado.");

    console.log("--------------------------------");

};


//=========================================
// INFORMACIÓN
//=========================================

console.log("Versión: 1.0");
console.log("Desarrollador: Juan Sebastián Rojas");
console.log("Proyecto: Sistema de Gestión GLASÉ");


//=========================================
// FIN DEL DASHBOARD
//=========================================