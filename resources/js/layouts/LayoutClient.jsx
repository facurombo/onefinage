import React from "react";
import Navbar from '../components/navBar.jsx';
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";



const LayoutClient = () => {
    return (         
          <> 
            <h1>Layout Client</h1>
            <Navbar />
            <Outlet />
            <Footer />  
        </>
    );
}    

export default LayoutClient;

    
