let buttonRemove = document.getElementById("btn-remove");
let buttonAdd = document.getElementById("btn-add");
let compteur = document.getElementById("compteur");
const buttonReset = document.getElementById("btn-reset");

function add() {
   console.log("Ajouter");
   const nombre = Number(compteur.innerHTML);
   compteur.innerHTML = nombre + 1;
}

function remove() {
    const nombre = Number(compteur.innerHTML);
    if(nombre > 0) {
        compteur.innerHTML = nombre - 1; 
    } 
}

function reset() {
    compteur.innerHTML = '0';
}

buttonAdd.addEventListener("click", add);
buttonRemove.addEventListener("click", remove);
buttonReset.addEventListener("click", reset);


