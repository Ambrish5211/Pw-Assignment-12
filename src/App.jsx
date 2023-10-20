/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { useState } from "react"


function App() {
  const [text, setText] = useState("Click Me")
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  const handleClick = () => {
    setText((prevText) => (prevText === "Click Me" ? "Clicked" : "Click Me"));
  }
  

  return (
    <div>
    <Person name={"Ambrish Kumar"} age={20}/>
    <Button text={text} onClick={handleClick} />
    <Header title={"Pw Skills"}/>
    <List items={items} />
    </div>
    )
}


function Person ({name, age}) {
 return (
  <div>
    <p>{name}</p>
    <p>{age}</p>
  </div>
 )
}

function Button ({text, onClick}) {
 return(
  <button onClick={onClick}>{text}</button>
 )
}

function Header ({title}) {
 return(
  <header>
    {title}
  </header>
 )
}

function List ({items}) {
 return (
  <ul>
    {items.map((item) =>  <li>{item}</li>)}
  </ul>
 )
}
export default App
