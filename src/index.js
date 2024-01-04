import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Projects from "./pages/Projects";
import ProjectsComponent from "./components/project";
import ContactMe from "./pages/ContactMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "projects",
    element: <Projects  />,
  },
  {
    path: "contact",
    element: <ContactMe />,
  },
  {
    path: "aboutme",
    element: <App />,
  },
]);

{
  /* <Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/login" element={<Login />} />
</Routes> */
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);

reportWebVitals();
