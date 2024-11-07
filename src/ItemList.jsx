import ListItem from './ListItem'
const ItemList = ({handleDelete, handleChange, items}) => {
  return (
    <section className="flex flex-col justify-center 
    sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 
    widescreen:section-min-height tallcreen:section-min-height">
        <ul className="text-2xl">
        {items.map((item) =>(
            <ListItem 
                key={item.id}
                item = {item}
                handleDelete ={handleDelete}
                handleChange ={handleChange}

            />
        ))}  
        </ul>
    </section>
  )
}

export default ItemList
