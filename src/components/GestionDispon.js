import { Link } from "react-router-dom";
function GestionDispon(){
    return(
        <div>
            <div className="container w-75 my-5">
                <Link className="NuevaDisp" to="/FormDisp">
                    <button type="button" className="btn btn-outline-primary btn-lg">Nuevo</button>
                </Link>
            </div>
            <div className="container w-75 mb-5 border-1 rounded shadow">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Ciudad</th>
                            <th scope="col">Tipo de gasolina</th>
                            <th scope="col">Inventario Inicial</th>
                            <th scope="col">Medida</th>
                            <th scope="col">Movimiento</th>  
                            <th scope="col">Cantidad</th>                    
                            <th scope="col">Fecha de Movimiento</th>
                            <th scope="col">Inventario Final</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Bogota</td>
                            <td>ACPM</td>
                            <td>20</td>
                            <td>galones</td>
                            <td>Adiciona</td>
                            <td>10</td>
                            <td>2021-02-26</td>
                            <td>30</td>
                            <td><i className="bi bi-pencil" ></i></td>
                            <td><i className="bi bi-trash"></i></td>
                            
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Bogota</td>
                            <td>ACPM</td>
                            <td>30</td>
                            <td>galones</td>
                            <td>Sustrae</td>
                            <td>5</td>
                            <td>2021-02-28</td>
                            <td>25</td>
                            <td><i className="bi bi-pencil" ></i></td>
                            <td><i className="bi bi-trash"></i></td>
                            
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default GestionDispon;