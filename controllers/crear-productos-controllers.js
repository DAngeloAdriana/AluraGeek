
import { productosServicios } from "../servicios/productos-servicios.js"

const form = document.querySelector('[data-form]')

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const url = document.querySelector('[data-url]').value;
    const nombre = document.querySelector('[data-nome]').value;
    const precio = document.querySelector('[data-preco]').value;

    productosServicios.crearProductos(url, nombre, precio)
        .then(respuesta => {
            window.location.href ="index.html";
            console.log(respuesta);
        })
        .catch(error => {
            console.log(error);
        });
});

