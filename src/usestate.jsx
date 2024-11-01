import { useState } from "react";
const UseState = () =>{
    const [name, setName] = useState("")
    const [count, setCount] = useState(0)
    const handleNameChange = () =>{
      const names  = ["Bezit", "Tsede", "Chacha", "Dave Gray","Bezit", "Tsede", "Chacha", "Dave Gray","Bezit", "Tsede", "Chacha", "Dave Gray","Bezit", "Tsede", "Chacha", "Dave Gray","Bezit", "Tsede", "Chacha", "Dave Gray"];
      const int = Math.floor(Math.random() *16 )
      setName(names[int])
    };
  
    const handleCountChange = () =>{
      setCount(coun => coun+1)
    }
  
    return (
      <>
      <p>{name}</p>
      <button onClick={handleNameChange}>handleNameChange</button>
      
      <p>{count}</p>
      <button onClick={handleCountChange}>handleCountChange</button>
      </>
    )
}
export default UseState