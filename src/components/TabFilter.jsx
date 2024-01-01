// eslint-disable-next-line react/prop-types
function TabFilter({ handleFilter }) {

  const handleClick = (flag) => {
    handleFilter(flag)
  }
  return (
    <div className="mx-auto ">
      <span className="border shadow-sm  grid grid-cols-3 w-3/12 min-h-9 min-w-fit mx-auto my-2 rounded-3xl">
        <button
          className="cursor-pointer hover:bg-[--colorSec] px-2 rounded-l-3xl font-semibold"
          onClick={() => handleClick("popular")}
        >
          Popular
        </button>
        <button
          className="cursor-pointer hover:bg-[--colorSec] px-2 font-semibold"
          onClick={() => handleClick("new")}
        >
          New
        </button>
        <button
          className="cursor-pointer hover:bg-[--colorSec] px-2 rounded-r-3xl  font-semibold"
          onClick={() => handleClick("bestsellers")}
        >
          Bestsellers
        </button>
      </span>
    </div>
  )
}

export default TabFilter
