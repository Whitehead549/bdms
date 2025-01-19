import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  

  return (
    <div className="bg-[#000300] overflow-x-hidden">
      <Router>
        <div className="min-h-screen flex flex-col">
          {/* Conditionally render Navbar */}
           <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<ContactUs />} />

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
