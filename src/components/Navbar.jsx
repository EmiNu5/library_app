export default function Navbar() {
  return (
    <div className=" bg-gradient-to-r  from-yellow-700  via-orange-800  to-red-700 flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex items-center space-x-3 rtl:space-x-reverse"></div>
      <ul className="w-full md:block md:w-auto">
        <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white">
          <li className="cursor-pointer font-semibold">
            <a href="#">Inicio</a>
          </li>
          <li className="cursor-pointer font-semibold">
            <a href="./acercade">Acerca de</a>
          </li>
          <li className="cursor-pointer font-semibold">
            <a href="./carrito">Carrito</a>
          </li>
        </div>
      </ul>
    </div>
  )
}
