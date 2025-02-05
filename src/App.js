import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

function App() {
  return (
    <div className="bg-[#000300] overflow-x-hidden relative">
      <Router>
        <Content />
      </Router>

      {/* Telegram Chat Icon with Label */}
      <a
        href="https://t.me/msverovixen"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition duration-300 ease-in-out z-50 pointer-events-auto flex items-center space-x-2"
      >
        <i className="fab fa-telegram-plane text-2xl"></i>
        <span className="text-sm font-semibold">Chat Me</span>
      </a>
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