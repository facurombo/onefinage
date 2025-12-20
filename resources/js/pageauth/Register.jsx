import React, { useState, useEffect } from "react";
import Config from "../Config.jsx";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser.jsx";
import "bootstrap/dist/css/bootstrap.min.css";





const Register = () => {
  const { getToken } = AuthUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) {
      navigate("/");
    }
  }, []);

  const submitRegistro = async (e) => {
    e.preventDefault();

    Config.getRegister({ name, email, password })
      .then(({ data }) => {
        if (data.success) {
          navigate("/login");
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

      <h2 className="text-center fw-bold mb-1">Crear cuenta</h2>
      <p className="text-center text-muted mb-4">Completá los datos para registrarte</p>

      <div className="mb-3"><input type="text" className="form-control" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} /></div>

      <div className="mb-3"><input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>

      <div className="mb-4"><input type="password" className="form-control" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} /></div>

      <button onClick={submitRegistro} className="btn btn-primary w-100">Registrarme</button>

      <p className="text-center mt-3 mb-0"><small>Términos y condiciones</small></p>

    </div>
  </div>
</div>



  );
};

export default Register;
