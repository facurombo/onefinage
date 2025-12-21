import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../assets/bg-home.jpg"; // ajustá la ruta

const PageHome = () => {
  return (
    <div
      className="d-flex align-items-center"
      style={{
        minHeight: "calc(100vh - 140px)",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">

            <div className="p-4 p-md-5 bg-white bg-opacity-90 border rounded-4 shadow-sm">
              <div className="text-center">

                <h1 className="fw-bold display-5 mb-3">
                  Tu agenda de objetivos y finanzas.
                </h1>

                <p className="text-muted fs-5 mb-4">
                  Planificá fácil tu semana, ingresos, vencimientos y gastos
                  mientras te organizas con un sistema simple.
                </p>

                <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
                  <NavLink to="/register" className="btn btn-dark btn-lg px-4">
                    Empezar
                  </NavLink>
                  <NavLink to="/login" className="btn btn-outline-dark btn-lg px-4">
                    Ya tengo cuenta
                  </NavLink>
                </div>

                <div className="d-flex justify-content-center flex-wrap gap-2">
                  <span className="px-3 py-2 border rounded-pill small">🎯 Objetivos Cumplidos</span>
                  <span className="px-3 py-2 border rounded-pill small">📅 Rutinas en Calma</span>
                  <span className="px-3 py-2 border rounded-pill small">💸 Finanzas en Crecimiento</span>
                </div>

              </div>

              <div className="row g-3 mt-4">
                <div className="col-12 col-md-4">
                  <div className="p-3 border rounded-4 h-100">
                    <div className="fw-semibold mb-1">Claridad</div>
                    <div className="text-muted small">
                      Lo importante primero: objetivos, tareas y hábitos visibles.
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="p-3 border rounded-4 h-100">
                    <div className="fw-semibold mb-1">Orden</div>
                    <div className="text-muted small">
                      Vencimientos y gastos organizados para evitar sorpresas.
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="p-3 border rounded-4 h-100">
                    <div className="fw-semibold mb-1">Crecimiento</div>
                    <div className="text-muted small">
                      Crecé financiera y profesionalmente con planificación anual.
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4 text-muted small">
                Hecha y pensada por y para estudiantes, trabajadores y freelancers.
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHome;
