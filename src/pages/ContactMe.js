import React from "react";
import Contact from "../components/contact";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const ContactMe = () => {
  return (
    <div>
    <Navbar/>
     <div className="text-4xl text-center font-bold my-8">
       CONTACT ME
     </div>

       <Contact />
       <Footer/>
     </div>
  
   
  );
};

export default ContactMe;
