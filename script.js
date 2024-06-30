//piedra = 0, papel = 1; tijeras = 2

const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijeras = document.getElementById("tijeras");
const elecciones = document.getElementById("elecciones");
const ganador = document.getElementById("ganador");
const eleccion__jugador = document.getElementById("eleccion__jugador");
const eleccion__ordenador = document.getElementById("eleccion__ordenador");
const resultado = document.getElementById("resultado");
const score = document.getElementById("score");
const nuevo__juego = document.getElementById("nuevo__juego");


//elemento piedra
const piedra2 = document.createElement("div");
piedra2.setAttribute("id", "piedra");
const img = document.createElement("img");
img.src = "./images/icon-rock.svg";
piedra2.appendChild(img)

//elemento papel
const papel2 = document.createElement("div");
papel2.setAttribute("id", "papel");
const img2 = document.createElement("img");
img2.src = "./images/icon-paper.svg";
papel2.appendChild(img2);

//elemento tijeras
const tijeras2 = document.createElement("div");
tijeras2.setAttribute("id", "tijeras");
const img3 = document.createElement("img");
img3.src = "./images/icon-scissors.svg";
tijeras2.appendChild(img3);

//elemento piedra
const piedra3 = document.createElement("div");
piedra3.setAttribute("id", "piedra");
const img4 = document.createElement("img");
img4.src = "./images/icon-rock.svg";
piedra3.appendChild(img4)

//elemento papel
const papel3 = document.createElement("div");
papel3.setAttribute("id", "papel");
const img5 = document.createElement("img");
img5.src = "./images/icon-paper.svg";
papel3.appendChild(img5);

//elemento tijeras
const tijeras3 = document.createElement("div");
tijeras3.setAttribute("id", "tijeras");
const img6 = document.createElement("img");
img6.src = "./images/icon-scissors.svg";
tijeras3.appendChild(img6);

//elemento resultado
const resultado2 = document.createElement("p");
resultado.insertBefore(resultado2, resultado.firstChild);

let eleccionMaquina;
let eleccionUsuario;
let contador = 0;
console.log(eleccionMaquina);

eleccion__ordenador.appendChild(piedra2);

piedra.onclick = function() { 
    eleccionMaquina = getRandomInt(3);
    eleccionUsuario=0;
    elecciones.classList.remove("contenedor__elecciones");
    elecciones.classList.add("ocultar");
    ganador.classList.remove("ocultar");
    ganador.classList.add("ganador");
    eleccion__jugador.removeChild(eleccion__jugador.lastChild);
    eleccion__jugador.appendChild(piedra3);
    if(eleccionMaquina == 0){
        eleccion__ordenador.removeChild(eleccion__ordenador.lastChild);
        eleccion__ordenador.appendChild(piedra2);
        resultado2.innerHTML = "Empate";
        resultado2.classList.add('quien__gana');
    }else if(eleccionMaquina == 1){
        eleccion__ordenador.removeChild(eleccion__ordenador.lastChild);
        eleccion__ordenador.appendChild(papel2);
        resultado2.innerHTML = "Tú pierdes";
        resultado2.classList.add('quien__gana');
    }else if(eleccionMaquina == 2){
        eleccion__ordenador.removeChild(eleccion__ordenador.lastChild);
        eleccion__ordenador.appendChild(tijeras2);
        resultado2.innerHTML = "Tú ganas";
        resultado2.classList.add('quien__gana');
        contador++;
        score.innerText = contador;
    }
}; 

papel.onclick = function() { 
    eleccionMaquina = getRandomInt(3); 
    eleccionUsuario=1;
    elecciones.classList.remove("contenedor__elecciones");
    elecciones.classList.add("ocultar");
    ganador.classList.remove("ocultar");
    ganador.classList.add("ganador");
    eleccion__jugador.removeChild(eleccion__jugador.lastChild);
    eleccion__jugador.appendChild(papel3);
    if(eleccionMaquina == 0){
        eleccion__ordenador.removeChild(eleccion__ordenador.lastChild);
        eleccion__ordenador.appendChild(piedra2);
        resultado2.innerHTML = "Tú ganas";
        resultado2.classList.add('quien__gana');
        contador++;
        score.innerText = contador;
    }else if(eleccionMaquina == 1){
        eleccion__ordenador.removeChild(eleccion__ordenador.lastChild);
        eleccion__ordenador.appendChild(papel2);
        resultado2.innerHTML = "Empate";
        resultado2.classList.add('quien__gana');
    }else if(eleccionMaquina == 2){
        eleccion__ordenador.removeChild(eleccion__ordenador.lastChild);
        eleccion__ordenador.appendChild(tijeras2);
        resultado2.innerHTML = "Tú pierdes";
        resultado2.classList.add('quien__gana');
    }
}; 

tijeras.onclick = function() { 
    eleccionMaquina = getRandomInt(3); 
    eleccionUsuario=2;
    elecciones.classList.remove("contenedor__elecciones");
    elecciones.classList.add("ocultar");
    ganador.classList.remove("ocultar");
    ganador.classList.add("ganador");
    eleccion__jugador.removeChild(eleccion__jugador.lastChild);
    eleccion__jugador.appendChild(tijeras3);
    if(eleccionMaquina == 0){
        eleccion__ordenador.removeChild(eleccion__ordenador.lastChild);
        eleccion__ordenador.appendChild(piedra2);
        resultado2.innerHTML = "Tú pierdes";
        resultado2.classList.add('quien__gana');
    }else if(eleccionMaquina == 1){
        eleccion__ordenador.removeChild(eleccion__ordenador.lastChild);
        eleccion__ordenador.appendChild(papel2);
        resultado2.innerHTML = "Tú ganas";
        resultado2.classList.add('quien__gana');
        contador++;
        score.innerText = contador;
    }else if(eleccionMaquina == 2){
        eleccion__ordenador.removeChild(eleccion__ordenador.lastChild);
        eleccion__ordenador.appendChild(tijeras2);
        resultado2.innerHTML = "Empate";
        resultado2.classList.add('quien__gana');
    }
}; 

function nuevoJuego(){
    elecciones.classList.add("contenedor__elecciones");
    elecciones.classList.remove("ocultar");
    ganador.classList.add("ocultar");
    ganador.classList.remove("ganador");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }