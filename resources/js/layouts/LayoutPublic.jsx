import React from "react";  
import Navbar from '../components/navBar.jsx';
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";



     
const LayoutPublic = () => {
    return (
        <> 
        <div className="d-flex flex-column min-vh-100"> 
            <Navbar />
            <main className="flex-grow-1">
            <Outlet />
            </main>
            <Footer />  
        </div>
        </>
      
    );
}

export default LayoutPublic;