import React from "react";
import Contact from "../components/contact";
import Navbar from "../components/navbar";

const ContactMe = () => {
  return (
    <div>
    <Navbar/>
     <div className="text-4xl text-center font-bold my-8">
       CONTACT ME
     </div>

       <Contact />
     </div>
  
   
  );
};

export default ContactMe;
