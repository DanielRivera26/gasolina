import { Link } from 'react-router-dom' 
function BarraNav(){
    return(
    <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container px-lg-5">
        <Link to="/" className="navbar-brand">
             <img src="/img/Logo.png" alt="" width="100" height="60" />
        </Link>
    
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Inicio</a></li>
                <li class="nav-item"><a class="nav-link" href="/GestionPrecios">Registro</a></li>
                <li class="nav-item"><a class="nav-link" href="/GestionDispon">Contacto</a></li>
               
            </ul>
        </div>
    </div>
</nav>
);
}
export default BarraNav;