import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import logo from '/largeLogo.png'; // Use / if it's in public folder
const repoName = 'la_eloteria_bakersfield';
function App() {
    return (_jsx(BrowserRouter, { basename: `/${repoName}`, children: _jsxs("div", { className: "flex flex-col min-h-screen", children: [_jsxs("nav", { className: "bg-red-500 text-black p-4 flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("img", { src: logo, alt: "Logo", className: "h-5 w-5 mr-1 rounded" }), _jsx("h1", { className: "text-xl font-bold", children: "La Eloteria Bakersfield" })] }), _jsxs("div", { className: "space-x-4", children: [_jsx(Link, { to: "/", className: "hover:underline", children: "Men\u00FA" }), _jsx(Link, { to: "/Sobre_Nosotros", className: "hover:underline", children: "Sobre Nosotros" }), _jsx(Link, { to: "/Cont\u00E1ctanos", className: "hover:underline", children: "Cont\u00E1ctanos" })] })] }), _jsx("main", { className: "flex-grow flex items-center justify-center", children: _jsx("div", { className: "w-full max-w-4xl px-4 py-8", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/Sobre_Nosotros", element: _jsx(About, {}) }), _jsx(Route, { path: "/Cont\u00E1ctanos", element: _jsx(Contact, {}) })] }) }) }), _jsxs("footer", { className: "bg-red-500 text-black text-center p-4", children: ["\u00A9 ", new Date().getFullYear(), " La Eloteria"] })] }) }));
}
export default App;
