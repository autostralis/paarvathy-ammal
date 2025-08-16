import Legacy from './pages/Legacy';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ForInvestors from "./pages/ForInvestors";
import ForManufacturers from "./pages/ForManufacturers";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Founder from "./pages/Founder";

// Import layout components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <Header />
        <main>
          <Routes>
            <Route path="/legacy" element={<Legacy />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/for-investors" element={<ForInvestors />} />
            <Route path="/for-manufacturers" element={<ForManufacturers />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;