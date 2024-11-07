import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const InputRef = useRef();
  return (
    <form onSubmit={handleSubmit} className="text-2xl flex  mb-4 justify-center items-center gap-2 ">
      <label htmlFor="AddItem" > AddItem </label>
      <input
      className="text-center text-xl text-black" 
        type="text" 
        id="AddItem"
        placeholder="Add item here..."
        required
        autoFocus
        ref={InputRef}
        value = {newItem} 
        onChange={(e)=>setNewItem(e.target.value)}
      /> 
      <button className="pl"
        type="submit"
        aria-label="AddItem"
        onClick={() => InputRef.current.focus()}
      >
         <FaPlus />
        </button>
    </form>
  )
}

export default AddItem
