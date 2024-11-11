import { useState	 } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Content from './content.jsx'
import AddItems from "./AddItem.jsx"
import SearchItem from './SearchItem.jsx'


const App = () => {
      const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));

      const [newItem, setNewItem] = useState('');

      const [search, setSearch] = useState('');
      
      const [color, setColor] = useState('')


      const SaveandSetItemst = (newItems) =>{
        setItems(newItems);
        localStorage.setItem('shoppingList', JSON.stringify(newItems));
      };

      const AddItem = (item) =>{
        const id =items.length ? items[items.length - 1].id +1 : 1;
        const MyNewItem = {id, checked: false, item};
        const listItems = [...items, MyNewItem];
        SaveandSetItemst(listItems);
      }
      const handleSubmit = (e) =>{
        e.preventDefault();
        if(!newItem){
          alert("Please enter an item");
          return;  
        } 
        AddItem(newItem);
        setNewItem('')
      };

    const handleChange = (id) =>{
      const listItems = items.map((item) => item.id === id? {...item, checked: !item.checked}: item) ;
      SaveandSetItemst(listItems);
  }

    const handleDelete = (id) =>{
    const newList = items.filter((item) => id !== item.id);
    SaveandSetItemst(newList);
    }



  return (
    <div className='min-h-screen flex flex-col bg-slate-50 dark:bg-black dark:text-white'>
      {/* <UseState /> */}
      <Header 
        title="React with Tailwind"
      />
      <SearchItem 
        search={search}
        setSearch = {setSearch}
        color={color}
        setColor={setColor}
      />
      
      <Content
        items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
        handleChange={handleChange} 
        handleDelete={handleDelete}
      />
      
      <AddItems
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <Footer 
        length={items.length}
      />
    </div>
  )
}

export default App
