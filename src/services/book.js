import books from '../data/mocks/books'

export function getLibros(textoBusqueda) {
  const textoBusquedaLowerCase = textoBusqueda.toLowerCase()
  return books.filter((book) => {
    return (
      book.titulo.toLowerCase().includes(textoBusquedaLowerCase) ||
      book.autor.toLowerCase().includes(textoBusquedaLowerCase)
    )
  })
}
