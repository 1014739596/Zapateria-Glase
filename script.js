/*========================================
        SISTEMA GLASÉ
========================================*/

//============================
// MENÚ ACTIVO
//============================

const menuItems = document.querySelectorAll(".sidebar li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});


//============================
// CONTADORES ANIMADOS
//============================

const counters = document.querySelectorAll(".card h3");

counters.forEach(counter=>{

    const target=parseInt(counter.innerText);

    let number=0;

    const update=()=>{

        const increment=Math.ceil(target/40);

        if(number<target){

            number+=increment;

            counter.innerText=number;

            setTimeout(update,30);

        }

        else{

            counter.innerText=target;

        }

    }

    update();

});


//============================
// ANIMACIÓN DE ENTRADA
//============================

window.addEventListener("load",()=>{

    const cards=document.querySelectorAll(".card");

    cards.forEach((card,index)=>{

        card.style.opacity="0";
        card.style.transform="translateY(40px)";

        setTimeout(()=>{

            card.style.transition=".6s";

            card.style.opacity="1";
            card.style.transform="translateY(0px)";

        },index*180);

    });

});


//============================
// BUSCADOR
//============================

const input=document.querySelector(".search input");

input.addEventListener("keyup",()=>{

    let filter=input.value.toLowerCase();

    let rows=document.querySelectorAll("tbody tr");

    rows.forEach(row=>{

        let text=row.innerText.toLowerCase();

        if(text.indexOf(filter)>-1){

            row.style.display="";

        }

        else{

            row.style.display="none";

        }

    });

});


//============================
// BOTÓN NUEVA ORDEN
//============================

const button=document.querySelector(".title button");

button.addEventListener("click",()=>{

    alert("Aquí se abrirá el formulario para registrar un nuevo arreglo.");

});


//============================
// SALUDO
//============================

const title=document.querySelector(".logo h2");

let hora=new Date().getHours();

if(hora<12){

    console.log("Buenos días");

}

else if(hora<18){

    console.log("Buenas tardes");

}

else{

    console.log("Buenas noches");

}


//============================
// HOVER TARJETAS
//============================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0px 15px 30px rgba(0,0,0,.18)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="0px 10px 25px rgba(0,0,0,.08)";

    });

});


//============================
// FECHA Y HORA
//============================

const header=document.querySelector("header");

const reloj=document.createElement("div");

reloj.style.fontWeight="600";
reloj.style.color="#6D4C41";

header.appendChild(reloj);

function actualizarHora(){

    const fecha=new Date();

    reloj.innerHTML=fecha.toLocaleString();

}

setInterval(actualizarHora,1000);

actualizarHora();


//============================
// EFECTO INVENTARIO
//============================

const inventario=document.querySelectorAll(".inventory-card");

inventario.forEach(card=>{

    card.addEventListener("click",()=>{

        card.style.transform="scale(1.08)";

        setTimeout(()=>{

            card.style.transform="scale(1)";

        },200);

    });

});


//============================
// CAMBIAR COLOR ESTADOS
//============================

const estados=document.querySelectorAll(".pending,.progress,.finish");

estados.forEach(e=>{

    e.addEventListener("mouseenter",()=>{

        e.style.cursor="pointer";

        e.style.opacity=".8";

    });

    e.addEventListener("mouseleave",()=>{

        e.style.opacity="1";

    });

});


//============================
// MENSAJE BIENVENIDA
//============================

setTimeout(()=>{

    console.log("Bienvenido al Sistema de Gestión GLASÉ");

},500);


//============================
// EFECTO SCROLL
//============================

window.addEventListener("scroll",()=>{

    if(window.scrollY>30){

        document.querySelector("header").style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

    }

    else{

        document.querySelector("header").style.boxShadow="none";

    }

});


//============================
// DATOS SIMULADOS
//============================

const datos={

    clientes:84,

    arreglos:46,

    inventario:235,

    materiales:68

};

console.table(datos);


//============================
// FIN DEL SCRIPT
//============================