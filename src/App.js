"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./pages/Home");
var About_1 = require("./pages/About");
var Contact_1 = require("./pages/Contact");
var largeLogo_png_1 = require("../public/largeLogo.png");
function App() {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col min-h-screen", children: [(0, jsx_runtime_1.jsxs)("nav", { className: "bg-red-500 text-black p-4 flex items-center justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center", children: [(0, jsx_runtime_1.jsx)("img", { src: largeLogo_png_1.default, alt: "Logo", className: "h-5 w-5 mr-1 rounded" }), (0, jsx_runtime_1.jsx)("h1", { className: "text-xl font-bold", children: "La Eloteria Bakersfield" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-x-4", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: "hover:underline", children: "Men\u00FA" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/about", className: "hover:underline", children: "Sobre Nosotros" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/contact", className: "hover:underline", children: "Cont\u00E1ctanos" })] })] }), (0, jsx_runtime_1.jsx)("main", { className: "flex-grow flex items-center justify-center", children: (0, jsx_runtime_1.jsx)("div", { className: "w-full max-w-4xl px-4 py-8", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/about", element: (0, jsx_runtime_1.jsx)(About_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/contact", element: (0, jsx_runtime_1.jsx)(Contact_1.default, {}) })] }) }) }), (0, jsx_runtime_1.jsxs)("footer", { className: "bg-red-500 text-black text-center p-4", children: ["\u00A9 ", new Date().getFullYear(), " La Eloteria"] })] }) }));
}
exports.default = App;
