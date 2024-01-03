import "./App.css";
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
       <h2 className="text-center text-4xl font-bold mt-6 mb-2">OPEN SOURCE CONTRIBUTION</h2>
       <VedVyasFoundationComponent/>
       <Contact/>
    </div>
  );
}

export default App;
