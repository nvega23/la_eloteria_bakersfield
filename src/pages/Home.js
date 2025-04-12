"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var jsx_runtime_1 = require("react/jsx-runtime");
var menu_jpeg_1 = require("../assets/menu.jpeg");
var menu2_jpeg_1 = require("../assets/menu2.jpeg");
function Home() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "px-4 py-8 text-center", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl md:text-5xl font-bold text-yellow-300", children: "\u00A1Bienvenidos a La Eloter\u00EDa Bakersfield!" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 text-lg md:text-xl text-gray-700", children: "\u00A1Donde encontrar\u00E1s los elotes m\u00E1s sabrosos de Bakersfield!" }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-8 flex flex-col md:flex-row justify-center items-center gap-6", children: [(0, jsx_runtime_1.jsx)("img", { src: menu_jpeg_1.default, alt: "Menu 1", className: "w-full max-w-xs rounded-xl shadow-lg border hover:scale-105 transition-transform duration-300" }), (0, jsx_runtime_1.jsx)("img", { src: menu2_jpeg_1.default, alt: "Menu 2", className: "w-full max-w-xs rounded-xl shadow-lg border hover:scale-105 transition-transform duration-300" })] })] }));
}
