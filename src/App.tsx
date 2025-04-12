import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import logo from '../public/largeLogo.png';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-red-500 text-black p-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-5 w-5 mr-1 rounded" />
            <h1 className="text-xl font-bold">La Eloteria Bakersfield</h1>
          </div>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Menú</Link>
            <Link to="/about" className="hover:underline">Sobre Nosotros</Link>
            <Link to="/contact" className="hover:underline">Contáctanos</Link>
          </div>
        </nav>

        <main className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-4xl px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        <footer className="bg-red-500 text-black text-center p-4">
          &copy; {new Date().getFullYear()} La Eloteria
        </footer>
      </div>
    </Router>
  );
}

export default App;
