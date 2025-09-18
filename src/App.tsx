import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
// import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useMemo, useState } from "react";
import Terminal from "./pages/Terminal";

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const location = useLocation();

  // 터미널 화면에서는 사이드바를 숨기고 풀스크린
  const isTerminal = useMemo(
    () => location.pathname === "/",
    [location.pathname]
  );

  return (
    <div className="flex flex-col h-screen">
      {!isTerminal && (
        <Sidebar
          expanded={isSidebarExpanded}
          setExpanded={setIsSidebarExpanded}
        />
      )}

      <main
        className={`flex-grow transition-all duration-300 ease-in-out ${
          !isTerminal ? (isSidebarExpanded ? "ml-52" : "ml-16") : "ml-0"
        }`}
      >
        <Routes>
          <Route path="/" element={<Terminal />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
