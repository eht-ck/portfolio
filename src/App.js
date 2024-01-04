import "./App.css";
import Footer from "./components/Footer";
import TechStack from "./components/TechStack";
import Contact  from "./components/contact";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import VedVyasFoundationComponent from "./components/opensource";
import ProjectsComponent from "./components/project";

function App() {
  return (
    <div>
      <Navbar/>
       <Hero />
       <TechStack/>
       <h2 className="text-center text-4xl font-bold mt-12 mb-4">OPEN SOURCE CONTRIBUTION</h2>
       <VedVyasFoundationComponent/>
       {/* <h2 className="text-center text-4xl font-bold mt-6 mb-2">PROJECTS</h2>/ */}
        <div className="max-w-screen-lg mx-auto">
      <div className="text-4xl text-center font-bold my-8 mt-12 mb-4">
        PROJECTS
      </div>
       <div className="flex justify-center items-center">
        <ProjectsComponent />
      </div>
      <Footer/>
    </div>
      
     </div>
  );
}

export default App;
