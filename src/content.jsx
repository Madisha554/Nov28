import ItemList from "./ItemList"
const Content = ({handleDelete, handleChange, items}) =>{

    return(
        <main className="max-w-4xl mx-auto  flex flex-grow justify-center 
      p-6 items-center  mb-4 
      sm:max-h-[72.4vh] max-h-[63.7vh] overflow-auto">
    
            {items.length ?(
                <ItemList 
                handleDelete={handleDelete}
                handleChange={handleChange}
                items={items}
                />
            ):(
            <h1 className="text-3xl mt-8 flex justify-center align-text-center">
                Your list is empty!
            </h1>
        )}
        </main>
    )
}
export default Content