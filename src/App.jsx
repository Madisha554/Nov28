import { useState	 } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Content from './content.jsx'

const App = () => {

  const [items, setItems] = useState([
    {
        id:1,
        checked: true,
        item: "Item 1"
    },
    {
        id:2,
        checked: false,
        item: "Item 2"
    },
    {
        id:3,
        checked: true,
        item: "Item 3"
    },
    {
        id:4,
        checked: false,
        item: "Item 4"
    }
]);

const handleChange = (id) =>{
const listItems = items.map((item) => item.id === id? {...item, checked: !item.checked}: item) ;
setItems(listItems);
localStorage.setItem('shoppingList', JSON.stringify(listItems));
}
const handleDelete = (id) =>{
// console.log(id); 
const newList = items.filter((item) => id !== item.id);
setItems(newList)
localStorage.setItem('shoppingList', JSON.stringify(newList));

}

  return (
    <div className='min-h-screen bg-slate-50 dark:bg-black dark:text-white'>
      {/* <UseState /> */}
      <Header 
        title="React with Tailwind"
      />
      <Content 
        items={items} 
        handleChange={handleChange} 
        handleDelete={handleDelete}
      />
      <Footer 
        length={items.length}
      />
    </div>
  )
}

export default App
