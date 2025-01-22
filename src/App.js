import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="bg-[#000300] overflow-x-hidden">
      <Router>
        <Content />
      </Router>
    </div>
  );
}

function Content() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Conditionally render Navbar */}
      {!hideNavbarAndFooter && <Navbar />}

      <main className="flex-grow">
        <Routes>
          {/* Default route: Welcome */}
          <Route path="/" element={<Welcome />} />

          {/* Main Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Services />} />
          <Route path="/serve" element={<ContactUs />} />
        </Routes>
      </main>

      {/* Conditionally render Footer */}
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

export default App;
