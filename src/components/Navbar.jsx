import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className=" bg-gradient-to-r from-yellow-700 via-orange-800 to-red-700 flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex items-center space-x-3 rtl:space-x-reverse"></div>
      <div className="w-full md:block md:w-auto font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white">
        <NavLink className="cursor-pointer font-semibold" to="#">
          Inicio
        </NavLink>
        <NavLink className="cursor-pointer font-semibold" to="./acercade">
          Acerca de
        </NavLink>
        <NavLink className="cursor-pointer font-semibold" to="./carrito">
          Carrito <span className="bg-white text-black rounded p-1 font-mono">0</span>
        </NavLink>
      </div>
    </div>
  )
}
