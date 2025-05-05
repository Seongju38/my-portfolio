import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useState } from "react";

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Sidebar
        expanded={isSidebarExpanded}
        setExpanded={setIsSidebarExpanded}
      />
      <main
        className={`flex-grow transition-all duration-300 ease-in-out ${
          isSidebarExpanded ? "ml-52" : "ml-16"
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
