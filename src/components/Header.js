import { Link } from 'react-router-dom'

const logeado =false;
function Header(){
    if (logeado){

    }
    return (
    <header className="py-5">
        <div className="container px-lg-5" >
            <div className="p-4 p-lg-5 bg-light rounded-3 text-center"id="ShellImagen">
                <div className="m-4 m-lg-5">
                    <h1 className="display-5 fw-bold">Shell</h1>
                    <p className="fs-4">Somos una empresa dedicada a la distribucion de gasolina</p>
                    <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                        </div>                  
                </div>
            </div>
        </div>
    </header>
    );
}
export default Header;