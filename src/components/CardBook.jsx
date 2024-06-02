/* eslint-disable react/prop-types */

const CardBook = ({ allBooks, setDetailsBooks }) => {
  return (
    <div 
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2 bg-[--colorPrim]">
      {allBooks.map((book, index) => 
        <div
          key={index}

          className="mx-auto cursor-pointer flex items-center justify-center hover:bg-[--colorSec] rounded"
          onClick={() => setDetailsBooks(book)}
        >
          <img
            src={book.image}
            alt={book.title}
            className= "object-fit w-32 h-48 rounded"
          />
        </div>
      )}
    </div>
  )
}

export default CardBook
