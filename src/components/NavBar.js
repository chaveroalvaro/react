import CardWidget from "./CardWidget";
function Navbar (){
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="index.html">Hoodie</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="quienesSomos.html">¿Quienes somos?</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="armaTuDis.html">Arma tu diseño</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="nuestrosTrabajos.html">Nuestros Trabajos</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="contacto.html">Contacto</a>
        </li>
        <li className="carrito">
            <CardWidget/>
        </li>
        </ul>
        
    </div>
    </div>
</nav>
}

export default Navbar;