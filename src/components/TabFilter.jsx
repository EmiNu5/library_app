import { useState } from 'react'

const TabFilter = ({ handleFilter }) => {
  const [activeButton, setActiveButton] = useState('')

  const handleClick = (flag) => {
    handleFilter(flag)
    setActiveButton(flag)
  }

  const getBtnStyles = (btnFlag) => {
    return `cursor-pointer px-2 font-semibold ${
      activeButton === btnFlag ? 'bg-[--colorSec]' : 'hover:bg-[--colorSec]'
    }`
  }

  const btns = [
    { label: 'Popular', flag: 'popular' },
    { label: 'Nuevo', flag: 'new' },
    { label: 'Bestsellers', flag: 'bestsellers' },
    { label: 'Todos', flag: 'all' },
  ]

  return (
    <div className="mx-auto">
      <span className="border shadow-sm grid grid-cols-4 w-3/12 min-h-9 min-w-fit mx-auto my-2 rounded-3xl">
        {btns.map((btn) => (
          <button
            type="button"
            key={btn.flag}
            className={getBtnStyles(btn.flag)}
            onClick={() => handleClick(btn.flag)}
          >
            {btn.label}
          </button>
        ))}
      </span>
    </div>
  )
}

export default TabFilter
