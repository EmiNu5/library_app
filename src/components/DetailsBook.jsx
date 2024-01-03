/* eslint-disable react/prop-types */

const DetailsBook = ({book}) => {
  return (
    <div className="px-3">
      <div className="fixed inset-0 bg-stone-900 bg-opacity-70 backdrop-blur-sm  flex justify-center items-center">
        <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5">
          <label htmlFor="titulo" value="Titulo" />
          <h2 className="text-red-400" >{book.title}</h2>
          <p className="text-red-400">{book.author}</p>
          <p className="text-red-400">{book.sinopsis}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailsBook
