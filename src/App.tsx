import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Sidebar />
      <main className="flex-grow ml-16 hover:ml-52 transition-all duration-300 ease-in-out">
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
