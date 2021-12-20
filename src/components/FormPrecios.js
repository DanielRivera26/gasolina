import React from 'react'
import { Link } from "react-router-dom";
export default function FormPrecios() {
    return (
        <div className="container w-50 my-5 border-1 rounded shadow">
            <div className="row">
                <div className="col">
                    <h2 className="fw-bold text-center text-primary " id="NuevoUsuario">Nuevo Precio</h2>

                    <form action="#" method="post" name="formPrecio" onsubmit="validar_formulario();">
                        <div>
                            <label for="Ciudad" className="form-label fw-bold">
                                Ciudad
                            </label>
                            <input className="form-control" type="text" name="ciudad" id="ciudad"/>
                        </div>
                        <div>
                            <label for="TipoGasolina" className="form-label fw-bold">
                                Tipo de gasolina
                            </label>
                            <select className="form-control"  name="tipoGasolina" >
                                <option disabled selected>Tipo Gasolina</option>
                                <option value="ACPM" >ACPM</option>
                                <option value="Disel" >Disel</option>
                            </select>
                        </div>
                        <div>
                            <label for="Fecha inicial" className="form-label fw-bold">
                                Fecha inicial
                            </label>
                            <input className="form-control" type="date" name="fechaIni" id="fechaIni"/>
                        </div>
                        <div>
                            <label for="Fecha Final" className="form-label fw-bold">
                                Fecha Final
                            </label>
                            <input className="form-control" type="date" name="fechaFin" id="fechaFin"/>
                        </div>
                        <div>
                            <label for="Precio" className="form-label fw-bold">
                                Precio
                            </label>
                            <input className="form-control" type="number" name="Precio" id="Precio"/>
                        </div>
                        <Link className="" to="/GestionPrecios">
                            <button type="button" class="btn btn-outline-danger " >Cancelar</button>
                        </Link>
                        <Link className="NuevoPrecio" to="/FormPrecios">
                            <button type="button" class="btn btn-outline-primary " id="BotonPd">Guardar</button>
                        </Link>
                    </form>

                </div>
            </div>
        </div>
    )
}

