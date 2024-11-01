import { FaTrashAlt } from 'react-icons/fa';
const Content = ({handleDelete, handleChange, items}) =>{

    return(
        <main className="max-w-4xl mx-auto ">
            {items.length ?(
           <section className="flex flex-col justify-center 
            sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 
            widescreen:section-min-height tallcreen:section-min-height">
            <ul className="text-2xl">
            {items.map((item) =>(
                <li className="item " key={item.id}>
                    <input className="w-6 h-6 text-blue-800  
                        focus:ring-red-500 focus:ring-2" id="checkbox" type="checkbox"
                    checked={item.checked}
                    onChange={() => handleChange(item.id)}/> &nbsp; 
                    <label className="text-3xl"
                        onDoubleClick={()=>handleChange(item.id)}
                        style={(item.checked)?{textDecoration:'line-through'}:null}
                    >{item.item} </label>
                    &nbsp;  &nbsp;  &nbsp; 
                    <button className="text-2xl hover:text-red-700" onClick={()=>handleDelete(item.id)}> 
                            <FaTrashAlt 
                        tabIndex="0"
                    />   </button>
                    
                </li>
            ))}  
            </ul>
         </section>
                ):(
                    <h1 className="text-3xl mt-8 flex justify-center align-text-center">Your list is empty!</h1>
                )}
 
        </main>
    )
}
export default Content