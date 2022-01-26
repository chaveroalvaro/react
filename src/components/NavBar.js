import CardWidget from "./CardWidget";
function Navbar (){
    return <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="index.html">Hoodie</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="quienesSomos.html">¿Quienes somos?</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="armaTuDis.html">Arma tu diseño</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="nuestrosTrabajos.html">Nuestros Trabajos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="contacto.html">Contacto</a>
        </li>
        <li class="carrito">
            <CardWidget/>
        </li>
        </ul>
        
    </div>
    </div>
</nav>
}

export default Navbar;