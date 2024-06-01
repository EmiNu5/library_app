import { useState } from 'react'
import books from 'src/mocks/books'

const TabFilter = ({ handleFilter }) => {
  const [activeButton, setActiveButton] = useState('')

  const handleClick = (flag) => {
    setActiveButton(flag)
    handleFilter(flag)
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
        <button
          type="reset"
          key="all"
          className={getBtnStyles('all')}
          onClick={() => handleClick('all')}
        >
          Todos
        </button>
      </span>
    </div>
  )
}

export default TabFilter
