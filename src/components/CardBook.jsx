/* eslint-disable react/prop-types */

const CardBook = ({ allBooks }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 border-spacing-5 p-2 bg-[--colorPrim]">
      { allBooks.map(({ title, image }, index) => (
        <div
          key={ index }
          className="mx-auto cursor-pointer p-2 m-2 hover:bg-[--colorSec] rounded"
        >
          <img
            src={ image }
            alt={ title }
            className="flex w-32  mx-auto  h-48 object-fit rounded"
          />
        </div>
      )) }
    </div>
  )
}

export default CardBook
