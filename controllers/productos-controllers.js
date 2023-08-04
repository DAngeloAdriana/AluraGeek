const nuevoProducto = (name, imageUrl, price, id) => {
    const card = document.createElement("div");
    const contenido = `
    <div class="div_producto">
        <img src="${imageUrl}" class="img_producto" alt="Taza de Star Wars">
        <h2 class="product_description">${name}</h2>
        <h3 class="precio">${price}</h3>
        <a href="producto.html${id}" class="products_links">Ver producto</a>
    </div>`;

    card.innerHTML = contenido;
    card.dataset.id = id;

    return card;
};

// const productos = document.querySelector('[data-product]');