/* eslint-disable react/prop-types */

const CardBook = ({ allBooks, openDetails }) => {
  const openDetails = (book) => {
    console.log(book)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 border-spacing-5 p-2 bg-[--colorPrim]">
      {allBooks.map((book) => (
        <div
          key={title}
          className="mx-auto cursor-pointer p-2 m-2 hover:bg-[--colorSec] rounded"
        >
          <button
            className="bg-red-100 text-center border-none hover:border-red-700 hover:border-spacing-4"
            key={ book.title }
            onClick={ () => openDetails(book) }
          >
            <img
              src={ book.image }
              alt={ book.title }
              className="flex w-32  mx-auto  h-48 object-fit rounded"
            />
          </button>
        </div>
      )) }
    </div>
  )
}

export default CardBook
