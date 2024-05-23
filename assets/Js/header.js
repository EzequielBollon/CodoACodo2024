document.addEventListener("DOMContentLoaded", function () {
    const headerIndex = document.querySelector(".headerIndex");
    const headerPages = document.querySelector(".headerPages");
    
    if (headerIndex) {
        headerIndex.innerHTML = `
            <nav class="navbar">
                <div class="logo">
                    <a href="index.html"><img src="assets/images/logo.PNG" alt="HardSoft Logo"></a>
                    <a href="index.html"><h1>HardSoft</h1></a>
                </div>
                <label class="labe_hamburguesa" for="menu_hamburguesa">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="list_icon" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </label>
                <input class="menu_hamburguesa" type="checkbox" id="menu_hamburguesa">
                <ul class="ul_links">
                    <li class="li_links"><a href="index.html" class="link">Inicio</a></li>
                    <li class="li_links"><a href="pages/producto.html" class="link">Productos</a></li>
                    <li class="li_links"><a href="pages/login.html" class="link">Inicia sesión</a></li>
                    <li class="li_links"><a href="pages/contacto.html" class="link">Contacto</a></li>
                </ul>
            </nav>
            <form class="barra-busqueda" action="#">
                <span class="material-symbols-outlined">search</span>
                <input type="text" placeholder="Buscar Producto...">
                <button type="submit" class="btn-buscar">Buscar</button>
            </form>
        `;
    } else if (headerPages) {
        headerPages.innerHTML = `
            <nav class="navbar">
                <div class="logo">
                    <a href="../index.html"><img src="../assets/images/logo.PNG" alt="HardSoft Logo"></a>
                    <a href="../index.html"><h1>HardSoft</h1></a>
                </div>
                <label class="labe_hamburguesa" for="menu_hamburguesa">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="list_icon" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </label>
                <input class="menu_hamburguesa" type="checkbox" id="menu_hamburguesa">
                <ul class="ul_links">
                    <li class="li_links"><a href="../index.html" class="link">Inicio</a></li>
                    <li class="li_links"><a href="producto.html" class="link">Productos</a></li>
                    <li class="li_links"><a href="login.html" class="link">Inicia sesión</a></li>
                    <li class="li_links"><a href="contacto.html" class="link">Contacto</a></li>
                </ul>
            </nav>
            <form class="barra-busqueda" action="#">
                <span class="material-symbols-outlined">search</span>
                <input type="text" placeholder="Buscar Producto...">
                <button type="submit" class="btn-buscar">Buscar</button>
            </form>
        `;
    }
});
