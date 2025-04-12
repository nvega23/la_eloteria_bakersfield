import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import logo from '/largeLogo.png'; // Use / if it's in public folder

const repoName = 'la_eloteria_bakersfield';

function App() {
  return (
    <BrowserRouter basename={`/${repoName}`}>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-red-500 text-black p-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-5 w-5 mr-1 rounded" />
            <h1 className="text-xl font-bold">La Eloteria Bakersfield</h1>
          </div>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Menú</Link>
            <Link to="/Sobre_Nosotros" className="hover:underline">Sobre Nosotros</Link>
            <Link to="/Contáctanos" className="hover:underline">Contáctanos</Link>
          </div>
        </nav>

        <main className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-4xl px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Sobre_Nosotros" element={<About />} />
              <Route path="/Contáctanos" element={<Contact />} />
            </Routes>
          </div>
        </main>

        <footer className="bg-red-500 text-black text-center p-4">
          &copy; {new Date().getFullYear()} La Eloteria
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
