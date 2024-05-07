// Para ahorrar código, ahora solo hay que modificar el js para que se modifiquen todos los header

if (document.querySelector(".headerIndex")) {
    document.querySelector(".headerIndex").innerHTML = `
        <div class="logo">
            <a href="index.html"><img src="assets/images/logo.PNG" alt=""></a>
            <a href="index.html"><h1>HardSoft</h1></a>
        </div>
        <!-- Menu Hamburguesa -->
        <div class="menuHamburguesa">
            <input type="checkbox">
            <i class="fas fa-bars"></i>
            <i class="fas fa-times"></i>
            <nav>
                <ul>
                    <li><a href="ham">Item 1</a></li>
                    <li><a href="ham">Item 2</a></li>
                    <li><a href="ham">Item 3</a></li>
                    <li><a href="ham">Item 4</a></li>
                    <li><a href="ham">Item 5</a></li>
                </ul>
            </nav>
        </div>
        <form class="barra-busqueda" action="#">
            <span class="material-symbols-outlined">search</span>
            <input type="text" placeholder="Buscar Producto...">
        </form>
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="pages/producto.html">productos</a></li>
                <li><a href="pages/login.html">Inicia sesión</a></li>
                <li><a href="pages/contacto.html">Contacto</a></li>
            </ul>
        </nav>`;
} else {
    document.querySelector(".headerPages").innerHTML = `
        <div class="logo">
            <a href="../index.html"><img src="../assets/images/logo.PNG" alt=""></a>
            <a href="../index.html"><h1>HardSoft</h1></a>
        </div>
        <!-- Menu Hamburguesa -->
        <div class="menuHamburguesa">
            <input type="checkbox">
            <i class="fas fa-bars"></i>
            <i class="fas fa-times"></i>
            <nav>
                <ul>
                    <li><a href="ham">Item 1</a></li>
                    <li><a href="ham">Item 2</a></li>
                    <li><a href="ham">Item 3</a></li>
                    <li><a href="ham">Item 4</a></li>
                    <li><a href="ham">Item 5</a></li>
                </ul>
            </nav>
        </div>
        <form class="barra-busqueda" action="#">
            <span class="material-symbols-outlined">search</span>
            <input type="text" placeholder="Buscar Producto...">
        </form>
        <nav>
            <ul>
                <li><a href="../index.html">Inicio</a></li>
                <li><a href="producto.html">productos</a></li>
                <li><a href="login.html">Inicia sesión</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </nav>`;
}


