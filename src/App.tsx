import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
