import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser.jsx";
import Config from "../Config.jsx";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

    

const Login = () => { 
    
    const {setToken, getToken } = AuthUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
       if (getToken()) {
       navigate("/");
       }
    }, []);

    const submitLogin = async (e) => {
        e.preventDefault();
    
        Config.getLogin({email, password })
            .then(({ data }) => {
                if (data.success) {
                    console.log(data);
                    setToken(data.user, data.token, data.user.roles[0].name);
                    } else {
                    console.log(data.message);
                }
            })
            .catch((err) => {
                console.log(err);
            });
      };
    
    

    return (
       <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "calc(100vh - 120px)" }}>
    <div className="card shadow-lg border-0" style={{ width: "380px" }}>
    <div className="card-body p-4">

      <h2 className="text-center fw-bold mb-1">Login</h2>
      <p className="text-center text-muted mb-4">Completá los datos para ingresar a OneFinage</p>

      
      <div className="mb-3"><input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>

      <div className="mb-4"><input type="password" className="form-control" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} /></div>

      <button onClick={submitLogin} className="btn btn-primary w-100">Iniciar Sesión</button>

      <p className="text-center mt-3 mb-0"><small>{message}</small></p>
      <p className="text-center mt-3 mb-0"><small>Primera vez, debo registrarme</small></p>
      <a href="/register" className="btn btn-primary w-100"><small>Crear cuenta</small></a>

    </div>
  </div>
</div>
    );
}
export default Login;
