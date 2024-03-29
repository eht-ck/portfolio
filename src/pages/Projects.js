import React from "react";
import ProjectsComponent from "../components/project";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <div>
     <Navbar/>
    <div className="max-w-screen-lg mx-auto">
      <div className="text-4xl text-center font-bold my-8">
        PROJECTS
      </div>

      <div className="flex justify-center items-center">
        <ProjectsComponent />
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default Projects;
