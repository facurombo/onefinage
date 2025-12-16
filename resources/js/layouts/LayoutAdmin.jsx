import React from "react";
import Navbar from '../components/navBar.jsx';
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";



const LayoutAdmin = () => {
    return (
         <> 
         <h1>Layout Admin</h1>
            <Navbar />
            <Outlet />
            <Footer />  
        </>
    );
}

export default LayoutAdmin;
