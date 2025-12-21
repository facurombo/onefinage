import React from "react";
import { NavLink } from "react-router-dom";
import AuthUser from "../pageauth/AuthUser.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Config from "../Config.jsx";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";



const NavBar = () => {
const navigate = useNavigate();
  const { getRole, logout, getToken } = AuthUser();

  const logoutUser = async () => {
    try {
      await Config.getLogout(); // backend
    } catch (e) {
      console.log(e);
    } finally {
      logout();           // borra token/rol
      navigate("/"); //  te saca de /admin o /client
    }
  };

  const renderLinks = () => {
    if (getToken()) {
      return (
        <>
          <NavLink className="btn btn-outline-light btn-sm" to={`/${getRole()}`}>Administración</NavLink>
          <button type="button" className="btn btn-outline-light btn-sm" onClick={logoutUser}>Logout</button>
        </>
      );
    }

    return (
      <>
        <NavLink className="btn btn-outline-light btn-sm" to="/login">Login</NavLink>
        <NavLink className="btn btn-primary btn-sm" to="/register">Registro</NavLink>
      </>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid px-3">

        <NavLink className="navbar-brand fw-bold" to="/">OneFinage</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>Home</NavLink>
            </li>
          </ul>

          <div className="d-flex gap-2 ms-auto">
            {renderLinks()}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
