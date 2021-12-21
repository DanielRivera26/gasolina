import React from 'react'
import { Link } from "react-router-dom";
export default function FormDisp() {
    return (
        <div className="container w-50 my-5 border-1 rounded shadow">
            <div className="row">
                <div className="col">
                    <h2 className="fw-bold text-center text-primary " id="NuevoDisponi">Nuevo Disponibilidad</h2>

                    <form action="#" method="post" name="formPrecio" onsubmit="validar_formulario();">
                        <div>
                            <label for="CiudadDis" className="form-label fw-bold">
                                Ciudad
                            </label>
                            <input className="form-control" type="text" name="ciudad" id="ciudad"/>
                        </div>
                        <div>
                            <label for="TipoGasolinaDisp" className="form-label fw-bold">
                                Tipo de gasolina
                            </label>
                            <select className="form-control"  name="tipoGasolina" >
                                <option disabled selected>Tipo Gasolina</option>
                                <option value="ACPM" >ACPM</option>
                                <option value="Disel" >Disel</option>
                            </select>
                        </div>
                        <div>
                            <label for="InvIni" className="form-label fw-bold">
                                Inventario Inicial
                            </label>
                            <input className="form-control" type="number" name="InvIni"/>
                        </div>
                        <div>
                            <label for="Movimiento" className="form-label fw-bold">
                                Movimiento
                            </label>
                            <select className="form-control"  name="Movimiento" >
                                <option disabled selected>Movimiento</option>
                                <option value="Agrega" >Agrega</option>
                                <option value="Sustrae" >Sustrae</option>
                            </select>
                        </div>
                        <div>
                            <label for="Cantidad" className="form-label fw-bold">
                                Cantidad
                            </label>
                            <input className="form-control" type="number" name="Cantidad"/>
                        </div>
                        <div>
                            <label for="FechaMov" className="form-label fw-bold">
                                Fecha de Movimiento
                            </label>
                            <input className="form-control" type="date" name="fechaMov" id="fechaMov"/>
                        </div>
                        <Link className="" to="/GestionDispon">
                            <button type="button" className="btn btn-outline-danger " >Cancelar</button>
                        </Link>
                        <Link className="NuevoDis" to="/FormDisp">
                            <button type="button" className="btn btn-outline-primary " id="BotonPd">Guardar</button>
                        </Link>
                    </form>

                </div>
            </div>
        </div>
    )
}

