
// GET
export const listaProductos = () => {
    fetch("http://localhost:3000/producto")
        .then(respuesta => respuesta.json())
        .catch(error => console.log(error));
};

// POST
export const crearProductos = (name, imageUrl, price) => {

/* El codigo en este comentario es para probar que los datos se esten pasando correctamente desde el formuario
let response = {
    "url": url,
    "nombre": name,
    "price": price,
}
    console.log("servicio url: " + response.url);
    console.log("serviciio name: " + response.nombre);
    console.log("servicio price: " + response.price);
    return response
    */
    
    return fetch('http://localhost:3000/producto', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imageUrl,
            price,
            name,
        })
    })
    .then(respuesta => {
        if(respuesta.ok){
            return respuesta.json(); // Convertir la respuesta a formato JSON
        } else {
            throw new Error("No se pudo crear su producto"); // Lanzar un error en caso de respuesta no exitosa
        }
    })
    .catch(error => console.log(error));
};

export const productosServicios = {
    listaProductos,
    crearProductos,
};