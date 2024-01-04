/* eslint-disable react/prop-types */

const CardBook = ({ allBooks, setDetailsBooks }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 border-spacing-5 p-2 bg-[--colorPrim]">
      {allBooks.map((book, index) => (
        <div
          key={index}
          className="mx-auto cursor-pointer p-2 m-2 hover:bg-[--colorSec] rounded"
          onClick={() => setDetailsBooks(book)}
        >
          <img
            src={book.image}
            alt={book.title}
            className="flex w-32  mx-auto  h-48 object-fit rounded"
          />
        </div>
      ))}
    </div>
  )
}

export default CardBook
