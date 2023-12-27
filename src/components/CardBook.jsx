/* eslint-disable react/prop-types */

function CardBook({ allBooks }) {
  return (
    <>
      <div className="grid grid-cols-1  sm:grid-cols-3 md:grid-cols-6 border-spacing-5 p-2">
        {allBooks.map((book, index) => (
          <div
            key={index}
            className="mx-auto cursor-pointer  p-2 m-2 hover:bg-[--colorSec]"
          >
            {/* <h4 className="block  w-32">{book.titulo} </h4>
              <p className="block w-32">{book.autor}</p> */}
            <img 
              src={book.imagen}
              alt={book.titulo}
              className="flex w-32  mx-auto  h-48 object-fit"
            ></img>
          </div>
        ))}
      </div>
    </>
  )
}

export default CardBook
