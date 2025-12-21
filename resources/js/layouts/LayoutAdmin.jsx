import React, { useEffect } from "react";
import Navbar from '../components/navBar.jsx';
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import AuthUser from "../pageauth/AuthUser.jsx";
import { useNavigate } from "react-router-dom";



const LayoutAdmin = () => {

    const {getRole} = AuthUser();
    const Navigate = useNavigate();
     
    useEffect(() => {
        if(getRole() != 'admin'){
            Navigate('/');
        }
    }, []);

    return (
         <> 
         
            <div className="d-flex flex-column min-vh-100"> 
            <Navbar />
            <h1>Layout Admin</h1>
             <main className="flex-grow-1">
            <Outlet />
            </main>
            <Footer />  
        </div> 
        </>
    );
}

export default LayoutAdmin;
