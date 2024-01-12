// eslint-disable-next-line react/prop-types
const SearchBar = ({ textSearch, changeTextSearch }) => {
  return (
    <>
      <input
        className="block w-full p-4 text-m text-black rounded-xl bg-gray-50 focus:border focus:border-spacing-2 focus:ring-red-800 focus:border-red-800 outline-none"
        type="search"
        placeholder="Busca tu libro aqui"
        value={textSearch}
        onChange={(e) => changeTextSearch(e.target.value)}
        required
      />
    </>
  )
}

export default SearchBar
