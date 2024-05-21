// ACCEDER AL HTML POR MEDIO DEL DOM PARA AGREGAR TARJETAS DE PRODUCTOS DINAMICAMENTE EN EL CONTENEDOR.

let contenedor = document.querySelector(".contenedor");
let i=0;
while(i<=data.length){
    let card = ` <div data-aos="zoom-in" data-aos-duration="700">
                    <div class="card card${i}">
                         <img src="./assets/images/tarjetas/prod${i}.png" alt="producto ${i}" class="card-img">
                        <div class="card-content">
                            <h3 class="card-title">${data[i].title}</h3>
                            <p class="card-description">${data[i].description}</p>
                             <p class="card-price">${data[i].price}$</p>
                            <a href="#" class="card-btn">Ver más</a>
                        </div>
                    </div>
                </div>`;
    contenedor.innerHTML+=card;
    i++;
}