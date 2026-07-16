/*=========================================
        SISTEMA GLASÉ
        MERCANCÍA
=========================================*/


//=========================================
// MENÚ ACTIVO
//=========================================

const menu = document.querySelectorAll(".sidebar li");

menu.forEach(item=>{

    item.addEventListener("click",()=>{

        menu.forEach(i=>i.classList.remove("active"));

        item.classList.add("active");

    });

});


//=========================================
// ANIMACIÓN DE CARGA
//=========================================

window.addEventListener("load",()=>{

    const paneles=document.querySelectorAll(".panel");

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

const header=document.querySelector("header");

const reloj=document.createElement("span");

reloj.style.marginLeft="20px";
reloj.style.fontWeight="600";
reloj.style.color="#6D4C41";
reloj.style.fontSize="15px";

header.appendChild(reloj);

function actualizarHora(){

    const fecha=new Date();

    reloj.innerHTML=fecha.toLocaleString("es-CO");

}

actualizarHora();

setInterval(actualizarHora,1000);


//=========================================
// CONTADORES ANIMADOS
//=========================================

const contadores=document.querySelectorAll(".card h2");

contadores.forEach(contador=>{

    let texto=contador.innerText.replace(/\$|\.|,/g,"");

    let objetivo=parseInt(texto);

    if(isNaN(objetivo)) return;

    let numero=0;

    function incrementar(){

        const paso=Math.ceil(objetivo/45);

        if(numero<objetivo){

            numero+=paso;

            if(numero>objetivo){

                numero=objetivo;

            }

            if(contador.innerText.includes("$")){

                contador.innerText="$"+numero.toLocaleString("es-CO");

            }else{

                contador.innerText=numero;

            }

            setTimeout(incrementar,25);

        }

    }

    incrementar();

});


//=========================================
// EFECTO TARJETAS
//=========================================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


//=========================================
// BUSCADOR
//=========================================

const buscador=document.querySelector(".buscar input");

if(buscador){

    buscador.addEventListener("keyup",()=>{

        const texto=buscador.value.toLowerCase();

        const filas=document.querySelectorAll("tbody tr");

        filas.forEach(fila=>{

            const contenido=fila.innerText.toLowerCase();

            if(contenido.includes(texto)){

                fila.style.display="";

            }

            else{

                fila.style.display="none";

            }

        });

    });

}


//=========================================
// FILTRO POR CATEGORÍAS
//=========================================

const filtro=document.querySelector(".busqueda select");

if(filtro){

    filtro.addEventListener("change",()=>{

        const categoria=filtro.value.toLowerCase();

        const filas=document.querySelectorAll("tbody tr");

        filas.forEach(fila=>{

            const contenido=fila.innerText.toLowerCase();

            if(categoria.includes("todas")){

                fila.style.display="";

            }

            else if(contenido.includes(categoria.replace("zapatos ",""))){

                fila.style.display="";

            }

            else{

                fila.style.display="none";

            }

        });

    });

}


//=========================================
// EFECTO BOTÓN AGREGAR
//=========================================

const botonAgregar=document.querySelector(".btnAgregar");

if(botonAgregar){

    botonAgregar.addEventListener("mouseenter",()=>{

        botonAgregar.style.transform="translateY(-4px)";

    });

    botonAgregar.addEventListener("mouseleave",()=>{

        botonAgregar.style.transform="translateY(0px)";

    });

}


//=========================================
// MENSAJE DE BIENVENIDA
//=========================================

setTimeout(()=>{

    console.log("===================================");

    console.log(" Sistema GLASÉ");

    console.log(" Módulo Mercancía");

    console.log(" Mercancía cargada correctamente");

    console.log("===================================");

},500);

//=========================================
// BOTÓN AGREGAR PRODUCTO
//=========================================

if(botonAgregar){

    botonAgregar.addEventListener("click",()=>{

        alert("Aquí se abrirá el formulario para registrar un nuevo producto.");

    });

}


//=========================================
// BOTONES EDITAR
//=========================================

const botonesEditar=document.querySelectorAll(".editar");

botonesEditar.forEach(boton=>{

    boton.addEventListener("click",()=>{

        alert("Editar producto (Función demostrativa).");

    });

});


//=========================================
// BOTONES ELIMINAR
//=========================================

const botonesEliminar=document.querySelectorAll(".eliminar");

botonesEliminar.forEach(boton=>{

    boton.addEventListener("click",()=>{

        if(confirm("¿Desea eliminar este producto?")){

            const fila=boton.closest("tr");

            fila.remove();

        }

    });

});


//=========================================
// EFECTO TABLAS
//=========================================

const filas=document.querySelectorAll("tbody tr");

filas.forEach(fila=>{

    fila.addEventListener("mouseenter",()=>{

        fila.style.background="#F8F8F8";

    });

    fila.addEventListener("mouseleave",()=>{

        fila.style.background="white";

    });

});


//=========================================
// EFECTO PRODUCTOS REGISTRADOS
//=========================================

const movimientos=document.querySelectorAll(".movimientos li");

movimientos.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.paddingLeft="18px";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.paddingLeft="12px";

    });

});


//=========================================
// EFECTO PANELES
//=========================================

const paneles=document.querySelectorAll(".panel");

paneles.forEach(panel=>{

    panel.addEventListener("mouseenter",()=>{

        panel.style.boxShadow="0 15px 30px rgba(0,0,0,.15)";

    });

    panel.addEventListener("mouseleave",()=>{

        panel.style.boxShadow="0 8px 20px rgba(0,0,0,.08)";

    });

});


//=========================================
// TARJETA SELECCIONADA
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
// NOTIFICACIONES SIMULADAS
//=========================================

const mensajes=[

    "Nuevo producto agregado al catálogo.",

    "Inventario de mercancía actualizado.",

    "Producto con existencias bajas.",

    "Venta registrada correctamente.",

    "Mercancía sincronizada.",

    "Se recomienda abastecer algunos productos."

];

function mostrarNotificacion(){

    const mensaje=mensajes[Math.floor(Math.random()*mensajes.length)];

    console.log("📦 "+mensaje);

}

setInterval(mostrarNotificacion,25000);


//=========================================
// SCROLL SUAVE
//=========================================

document.documentElement.style.scrollBehavior="smooth";


//=========================================
// ANIMACIÓN AL HACER SCROLL
//=========================================

window.addEventListener("scroll",()=>{

    paneles.forEach(panel=>{

        const posicion=panel.getBoundingClientRect().top;

        if(posicion<window.innerHeight-80){

            panel.style.opacity="1";

            panel.style.transform="translateY(0px)";

        }

    });

});


//=========================================
// EFECTO BOTONES
//=========================================

const botones=document.querySelectorAll("button");

botones.forEach(boton=>{

    boton.addEventListener("mouseenter",()=>{

        boton.style.transition=".3s";

        boton.style.transform="scale(1.05)";

    });

    boton.addEventListener("mouseleave",()=>{

        boton.style.transform="scale(1)";

    });

});


//=========================================
// RESALTAR STOCK BAJO
//=========================================

const estados=document.querySelectorAll(".estado");

estados.forEach(estado=>{

    if(estado.innerText.includes("Bajo")){

        estado.style.animation="parpadear 1.2s infinite";

    }

});


//=========================================
// ANIMACIÓN CSS DESDE JS
//=========================================

const estilo=document.createElement("style");

estilo.innerHTML=`

@keyframes parpadear{

0%{opacity:1;}

50%{opacity:.4;}

100%{opacity:1;}

}

`;

document.head.appendChild(estilo);


//=========================================
// INFORMACIÓN DEL SISTEMA
//=========================================

console.log("--------------------------------");

console.log("GLASÉ");

console.log("Módulo Mercancía");

console.log("Versión 1.0");

console.log("Desarrollador: Juan Sebastián Rojas");

console.log("--------------------------------");


//=========================================
// FIN MERCANCÍA
//=========================================