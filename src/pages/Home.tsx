import menu from '../assets/menu.jpeg'
import menu2 from '../assets/menu2.jpeg'

export default function Home() {
  return (
    <div className="px-4 py-8 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-yellow-300">
        ¡Bienvenidos a La Elotería Bakersfield!
      </h2>
      <p className="mt-4 text-lg md:text-xl text-gray-700">
        ¡Donde encontrarás los elotes más sabrosos de Bakersfield!
      </p>

      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">
      <img
        src={menu}
        alt="Menu 1"
        className="w-full max-w-xs rounded-xl shadow-lg border hover:scale-105 transition-transform duration-300"
        />

        <img
        src={menu2}
        alt="Menu 2"
        className="w-full max-w-xs rounded-xl shadow-lg border hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
