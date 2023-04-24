const envio = prompt("¿Necesitas que enviemos el producto? Escriba Si o No");

if (envio == "Si", "si"){
    alert("Excelente, a continuación, diganos a donde quiere que llevemos el producto");
}
else{
    alert("Pase por nuestros locales y retire su producto!");
}

const ubicacion = prompt("Escriba la provincia donde reside");

while(ubicacion != "ESC"){
    switch(ubicacion){
    case ("CABA", "caba"):
        alert("Su envío tiene un costo de $3000")
        break;
    case "Buenos Aires", "buenos aires":
        alert("Su envío tiene un costo de $3590")
        break;
    case "Cordoba", "cordoba":
        alert("Su envío tiene un costo de $5100")
        break;
    case "Santa Fé", "santa fe":
        alert("Su envío tiene un costo de $4000" )
        break;
    case "Neuquen", "neuquen":
        alert("Su envío tiene un costo de $4500")
        break;
    case "La Pampa", "la pampa":
        alert("Su envío tiene un costo de $6350")
        break;
    case "Mendoza", "mendoza":
        alert("Su envío tiene un costo de $7430")
        break;
    case undefined:
        alert("Nuestros envíos no llegan a su ubicación, intente a través de otro correo");
        break;
}
}