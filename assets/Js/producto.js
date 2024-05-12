    document.addEventListener('DOMContentLoaded', function() {
        const producto = {
            nombre: "PC de Escritorio Gamer",
            descripcion: "Equipado con la última tecnología para ofrecer la mejor experiencia de juego.",
            precio: "1.200.000$",
            imagen: "assets/images/productos/pc_gamer.png"
        };
    
        const contenedor = document.getElementById('productosContainer');
        const html = `
            <div class="producto" data-aos="fade-up">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img">
                <div class="info-producto">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <span>${producto.precio}</span>
                    <button onclick="mostrarDetalles()">Ver más</button>
                </div>
            </div>
        `;
        contenedor.innerHTML = html;
    });
    
    function mostrarDetalles() {
        const detalleProducto = document.getElementById('detalleProducto');
        detalleProducto.querySelector('.modal-content').innerHTML = `
            <h2>PC de Escritorio Gamer</h2>
            <p>Detalles expansivos del PC de escritorio para gamers, con información sobre hardware y características.</p>
            <p>Precio: 1.200.000$</p>
        `;
        detalleProducto.style.display = 'block';
    }
    


// document.addEventListener('DOMContentLoaded', function() {
//     AOS.init({
//         duration: 800, // Duración de la animación en milisegundos
//         easing: 'slide', // Tipo de animación
//         once: false, // Si true, la animación solo ocurrirá una vez
//         mirror: true // Anima elementos al salir y entrar de la vista
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const params = new URLSearchParams(window.location.search);
//     const productId = params.get('id');
//     const productDetails = {
//         '1': {
//             name: 'Producto 1',
//             image: '/assets/images/tarjetas/product1.png',
//             description: 'Descripción completa del Producto 1.',
//             price: '$50'
//         },
//         // mas paginas 
//     };

//     if (productDetails[productId]) {
//         document.getElementById('productName').textContent = productDetails[productId].name;
//         document.getElementById('productImage').src = productDetails[productId].image;
//         document.getElementById('productImage').alt = 'Imagen de ' + productDetails[productId].name;
//         document.getElementById('productDescription').textContent = productDetails[productId].description;
//         document.getElementById('productPrice').textContent = 'Precio: ' + productDetails[productId].price;
//     } else {
//         document.getElementById('productName').textContent = 'Producto no encontrado';
//     }
// });
