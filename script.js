let arreglo7500 = [];
let boton = document.getElementById("boton_buscar");
let num = document.getElementById("numero_caja");
var ausencia = 0

for (let i = 1; i <= 7500; i++) {
    arreglo7500.push(9 * i);
}

document.querySelector("main").innerHTML = `
    <ol>
    ${listadoVector(arreglo7500)}    
    </ol>
`;

function listadoVector(vec) {
    let items = "";

    for(let i = 0; i <= arreglo7500.length - 1; i++) {
        items += `<li>${vec[i]}</li>`;
    }

    return items;
}

boton.addEventListener("click", function() {
    let buscar_num = num.valueAsNumber;
    let izq = 1; 
    let der = arreglo7500.length; 
    let mid;
    let cont = 0;

    while (izq <= der) {
        mid = Math.floor((izq + der) / 2);

        if (arreglo7500[mid] === buscar_num) {
            alert("El número " + buscar_num + " ha sido encontrado en la línea " + (mid + 1) + ".");  
            alert("Número de iteraciones: " + cont);  
            ausencia = 1;
            break;
        } else if (buscar_num < arreglo7500[mid]) {
            der = mid - 1;
            cont += 1
        } else {
            izq = mid + 1;
            cont += 1
        }
    }

    if (ausencia === 0) {
        alert("El número no ha sido encontrado.");  
        alert("Número de iteraciones: " + cont);  
    }
});