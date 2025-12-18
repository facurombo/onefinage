import React, { useState, useEffect } from "react";
import Config from "../Config.jsx";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser.jsx";

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
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-sm-10 col-md-6 col-lg-4">
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">
              <h2 className="text-center fw-bold mb-1">Crear cuenta</h2>
              <p className="text-center text-muted mb-4">Completá los datos para registrarte</p>

              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>

              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <div className="mb-4">
                <input type="password" className="form-control" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>

              <button onClick={submitRegistro} className="btn btn-primary w-100 py-2">Registrarme</button>

              <div className="text-center mt-4">
                <a href="#" className="small text-decoration-none">Términos y condiciones</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
