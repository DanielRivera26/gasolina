import { Link } from "react-router-dom";
function GestionPrecios(){
    return(
        <div>
            <div className="container w-75 my-5">
                <Link className="NuevoPrecio" to="/FormPrecios">
                    <button type="button" class="btn btn-outline-primary btn-lg">Nuevo</button>
                </Link>
            
            </div>
            <div className="container w-75 mb-5 border-1 rounded shadow">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Ciudad</th>
                            <th scope="col">Tipo de gasolina</th>
                            <th scope="col">Fecha Inicial</th>
                            <th scope="col">Fecha Final</th>                            
                            <th scope="col">Precio</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Bogota</td>
                            <td>ACPM</td>
                            <td>2021-02-26</td>
                            <td>2022-02-26</td>
                            <td>$8.900</td>
                            <td><i class="bi bi-pencil" ></i></td>
                            <td><i class="bi bi-trash"></i></td>
                            
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default GestionPrecios;