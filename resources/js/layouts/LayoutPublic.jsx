import React from "react";  
import Navbar from '../components/navBar.jsx';
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";


     
const LayoutPublic = () => {
    return (
        <> 
            <h1>Layout Public</h1>
            <Navbar />
            <Outlet />
            <Footer />  
        </>
      
    );
}

export default LayoutPublic;