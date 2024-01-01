import React from 'react'

function TabFilter() {
  return (
<div className="flex relative w-auto h-16 items-center justify-center flex-wrap ">
  <span className='cursor-pointer'>
    <button className="flex bg-white px-3 py-2 m-0 text-sm font-semibold text-gray-900 shadow-sm ring-gray-300 hover:bg-[--colorSec]">Más populares</button>
  </span>
  <span className='cursor-pointer'>
    <button className="flex bg-white px-3 py-2 m-0 text-sm font-semibold text-gray-900 shadow-sm ring-gray-300 hover:bg-[--colorSec]">Novedades</button>
  </span>
  <span className='cursor-pointer'>
    <button className="flex bg-white px-3 py-2 m-0 text-sm font-semibold text-gray-900 shadow-sm ring-gray-300 hover:bg-[--colorSec]">Bestsellers</button>
  </span>
</div>
  )
}

export default TabFilter

/*

*/
