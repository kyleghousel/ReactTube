const Search = ({ searchText, setSearchText} ) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  )
}

export default Search
