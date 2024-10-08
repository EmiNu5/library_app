const books = [
  {
    id: 1,
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    image: 'https://m.media-amazon.com/images/I/A1lNJP8sC6L._SY425_.jpg',
    sinopsis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    Publication_date: 2023,
    Categories: 'bestsellers',
    price: 40,
    stock: 100000
  },
  {
    id: 2,
    title: 'The Lord of the rings',
    author: 'J.R.R. Tolkien',
    image: 'https://m.media-amazon.com/images/I/41vi64toRPL._SY445_SX342_.jpg',
    sinopsis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    Publication_date: 2023,
    Categories: 'new',
    price: 40,
    stock: 100000
  },
  {
    id: 3,
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    image: 'https://m.media-amazon.com/images/I/91FYB5csxWL._AC_UY218_.jpg',
    sinopsis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    Publication_date: 1994,
    Categories: 'bestsellers',
    price: 40,
  },
  {
    id: 4,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    image: 'https://m.media-amazon.com/images/I/51zMWaFM+PL.jpg',
    sinopsis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    Publication_date: 1984,
    Categories: 'bestsellers',
    price: 50,
    stock: 100000
  },
  {
    id: 5,
    title: '1984',
    author: 'George Orwell',
    image: 'https://m.media-amazon.com/images/I/51W3i+Kj1lL.jpg',
    sinopsis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    Publication_date: 1984,
    Categories: 'popular',
    price: 40,
    stock: 100000
  },
  {
    id: 6,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    image: 'https://m.media-amazon.com/images/I/51PpzUbiLeL.jpg',
    sinopsis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    Publication_date: 1984,
    Categories: 'popular',
    price: 40,
    stock: 100000
  },
  {
    id: 7,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    image: 'https://m.media-amazon.com/images/I/71N9ipxBq-L._SY425_.jpg',
    sinopsis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    Publication_date: 1984,
    Categories: 'popular',
    price: 10,
    stock: 100000
  },
  {
    id: 8,
    title: 'Game of Thrones',
    author: 'George R. R. Martin',
    image: 'https://m.media-amazon.com/images/I/51CfXk0yCjL.jpg',
    sinopsis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    Publication_date: 1996,
    Categories: 'popular',
    price: 11,
    stock: 100000
  },
  {
    id: 9,
    title: 'Don Quijote de la Mancha',
    author: 'Miguel de Cervantes',
    image: 'https://m.media-amazon.com/images/I/A1QU-FgkiEL._SY466_.jpg',
    sinopsis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    Publication_date: 1615,
    Categories: 'popular',
    price: 55,
    stock: 100000
  },
]

export default books
