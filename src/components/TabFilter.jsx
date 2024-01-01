import React from 'react'

function TabFilter() {
  return (
    <div className="mx-auto ">
      <span className="border shadow-sm  grid grid-cols-3 w-3/12 min-h-9 min-w-fit mx-auto my-2 rounded-3xl">
        <button className="cursor-pointer hover:bg-[--colorSec] px-2 rounded-l-3xl font-semibold">
          Mas polulares
        </button>
        <button className="cursor-pointer hover:bg-[--colorSec] px-2 font-semibold">
          Nuevos
        </button>
        <button className="cursor-pointer hover:bg-[--colorSec] px-2 rounded-r-3xl  font-semibold">
          Bestsellers
        </button>
      </span>
    </div>
  )
}

export default TabFilter

/*

*/
