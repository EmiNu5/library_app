import { useState } from 'react'

// eslint-disable-next-line react/prop-types
function TabFilter({ handleFilter }) {
  const [activeButton, setActiveButton] = useState("")

  const handleClick = (flag) => {
    handleFilter(flag)
    setActiveButton(flag)
  }
  return (
    <div className="mx-auto ">
      <span className="border shadow-sm  grid grid-cols-3 w-3/12 min-h-9 min-w-fit mx-auto my-2 rounded-3xl">
        <button
          className={`cursor-pointer px-2 rounded-l-3xl font-semibold ${
          activeButton === "popular" ? "bg-[--colorSec]" : "hover:bg-[--colorSec]"
        }`}
          onClick={() => handleClick("popular")}
        >
          Popular
        </button>
        <button
          className={`cursor-pointer px-2 font-semibold ${
            activeButton === "new" ? "bg-[--colorSec]" : "hover:bg-[--colorSec]"
          }`}
          onClick={() => handleClick("new")}
        >
          Nuevo
        </button>
        <button
          className={`cursor-pointer px-2 rounded-r-3xl font-semibold ${
            activeButton === "bestsellers" ? "bg-[--colorSec]" : "hover:bg-[--colorSec]"
          }`}
          onClick={() => handleClick("bestsellers")}
        >
          Bestsellers
        </button>
      </span>
    </div>
  )
}

export default TabFilter