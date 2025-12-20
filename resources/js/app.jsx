import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutPublic from "./layouts/LayoutPublic.jsx";
import LayoutAdmin from "./layouts/LayoutAdmin.jsx";
import LayoutClient from "./layouts/LayoutClient.jsx";
import ProtectedRoutes from "./pageauth/ProtectedRoutes.jsx";
import PageHome from "./pagepublic/PageHome.jsx";
import Login from "./pageauth/Login.jsx";
import Register from "./pageauth/Register.jsx";
import PanelClient from "./pageclient/PanelClient.jsx";
import PanelAdmin from "./pageadmin/Paneladmin.jsx";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<LayoutPublic />}>
          <Route index element={<PageHome />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* PROTECTED */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<PanelAdmin />} />
          </Route>

          <Route path="/client" element={<LayoutClient />}>
            <Route index element={<PageHome />} />
            <Route path="panel" element={<PanelClient />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
