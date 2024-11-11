import { FaMicrophoneAlt  } from "react-icons/fa"
 const SearchItem = ({search, setSearch, color, setColor}) => {

  return (
    <form className="mx-auto pt-6 grid grid-cols-1 justify-center justify-self-center md:grid-cols-3 gap-4 mb-3" onSubmit={(e) => e.preventDefault()}>
      <section id="color" className=" flex items-center justify-center" style={
        {
        backgroundColor: color, 
        }
        }>
        <h2>{color? color : "Empty Color"}</h2>
      </section>

     

      <section className="mx-auto inline-flex text-xl text-center w-auto">
        <input className="text-center   text-black "
          type="text" 
          id="ColorInput" 
          role="colorbox"
          placeholder="Iputing color..."
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <label htmlFor="ColorInput">
          <FaMicrophoneAlt 
           className="text-2xl cursor-pointer"
         />
        </label>

      </section>
      <section className="mx-auto inline-flex">
        <input className=" text-center w-auto text-xl text-black "
          type="text" 
          id="SearchInput" 
          role="searchbox"
          placeholder="search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label htmlFor="SearchInput">
          <FaMicrophoneAlt 
           className="text-2xl cursor-pointer"
         />
        </label>

      </section>



    </form>
      
  )
}

export default SearchItem
