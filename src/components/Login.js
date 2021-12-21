import React, { Component } from 'react';

import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:3001/usuario";
const cookies = new Cookies();

class Login extends Component {
    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                let respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
                cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                window.location.href="./Inicio";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./Inicio";
        }
    }
    

        render() {
        return (
            <div>
        <form >
    <div className="mb-3">
        <label for="exampleInputEmail2" className="form-label">ID</label>
        <input type="text" 
                className="form-control" 
               
                placeholder="Ingrese Cedula"
                name="username"
                onChange={this.handleChange}
                />
        <div id="emailHelp" className="form-text">We'll never share your ID with anyone else.</div>
    </div>
    <div className="mb-3">
    <label for="inputPassword5" className="form-label">Password</label>
    <input type="password" 
           
            className="form-control" 
            a
            placeholder="Ingrese Contraseña"
            name="password"
            onChange={this.handleChange}/>
    <div className="form-text">
    </div>
    </div>
    
    <button type="submit" className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Submit</button>
    </form>
    <br />
    </div>

        );


    }
}

export default Login;