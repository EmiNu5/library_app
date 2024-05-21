import books from '../mocks/books'

export function getBooks(textSearch) {
  const searchLoweCase = textSearch.toLowerCase()
  return books.filter(({title, author}) => {
    return (
      title.toLowerCase().includes(searchLoweCase) ||
      author.toLowerCase().includes(searchLoweCase) 
    ) 
  })
}
