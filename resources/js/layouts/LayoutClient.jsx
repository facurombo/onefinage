import React from "react";
import Navbar from '../components/navBar.jsx';
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import AuthUser from "../pageauth/AuthUser.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";





const LayoutClient = () => {
    
    const {getRole} = AuthUser();
    const Navigate = useNavigate();
     
    useEffect(() => {
        if(getRole() != 'client'){
            Navigate('/');
        }
    }, []);


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

    
