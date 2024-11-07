// import { FaSearch } from "react-icons/fa"
 const SearchItem = ({search, setSearch}) => {

  return (
    <form className="max-w-4xl mx-auto flex justify-center items-center m-6" onSubmit={(e) => e.preventDefault()}>
      <input className="max-w-4xl mx-auto text-center w-auto text-xl text-black "
        type="text" 
        id="SearchInput" 
        role="searchbox"
        placeholder="search here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
      
  )
}

export default SearchItem
