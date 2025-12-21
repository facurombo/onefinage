import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import AuthUser from "./AuthUser.jsx";
import Config from "../Config.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const { setToken, getToken } = AuthUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) navigate("/");
  }, []);

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await Config.getLogin({ email, password });

      if (data.success) {
        const role = data.user.roles?.[0]?.name; // admin | client

        setToken(data.user, data.token, role);
        setMessage("");

        if (role === "admin") navigate("/admin");
        else if (role === "client") navigate("/client");
      } else {
        setMessage(data.message || "Credenciales incorrectas");
      }
    } catch (err) {
      console.log(err);
      setMessage("Error al iniciar sesión");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "calc(100vh - 120px)" }}>
      <div className="card shadow-lg border-0" style={{ width: "380px" }}>
        <div className="card-body p-4">

          <h2 className="text-center fw-bold mb-1">Login</h2>
          <p className="text-center text-muted mb-4">Completá los datos para ingresar a OneFinage</p>

          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="mb-4">
            <input type="password" className="form-control" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button onClick={submitLogin} className="btn btn-primary w-100">Iniciar Sesión</button>

          {message && (
            <p className="text-center text-danger mt-3 mb-0">
              <small>{message}</small>
            </p>
          )}

          <p className="text-center mt-3 mb-2">
            <small>¿Primera vez acá?</small>
          </p>

          <NavLink to="/register" className="btn btn-outline-primary w-100">
            <small>Crear cuenta</small>
          </NavLink>

        </div>
      </div>
    </div>
  );
};

export default Login;
