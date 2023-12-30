// eslint-disable-next-line react/prop-types
const SearchBar = ({ textSearch, changeTextSearch }) => {
  return (
    <div className="bg-[--colorCuar]">
      <input
        className="rounded-md text-2xl my-8"
        type="text"
        placeholder="Let's search"
        value={textSearch}
        onChange={ e => changeTextSearch(e.target.value)}
        required
      />
    </div>
  )
}

export default SearchBar
