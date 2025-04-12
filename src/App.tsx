import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-red-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">La Eloteria Bakersfield</h1>
          <div className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white text-center p-4">
          &copy; {new Date().getFullYear()} Client's Food Brand
        </footer>
      </div>
    </Router>
  );
}

export default App;