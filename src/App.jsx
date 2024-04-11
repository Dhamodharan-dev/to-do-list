import React, { useEffect, useState } from 'react';
import './App.css';
import Input from './input';
import List from './List';


function App() {
  const [input, setInput] = useState('')
  const [lists, setLists] = useState([])

  useEffect(()=>{
    let getInput = JSON.parse(localStorage.getItem("toDoList"))
    try{
      if(Array.isArray(getInput)){
        setLists(getInput)
      }else{
        setLists([])
      }
    }
    catch(err){
      console.log(err.message);
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    const getInput = input.trim()
    if(getInput!==""){
      const setNewInput = ([...lists, {checked: false, list: getInput}])
      setLists(setNewInput)
      localStorage.setItem("toDoList", JSON.stringify(setNewInput))
    }
    setInput('')
    scrollToBottom()
  }

  function handleCheck(id) {
    let updatedList = lists.map((item, index) =>
      index === id ? { ...item, checked: !item.checked } : item
    );
    setLists(updatedList);
    localStorage.setItem("toDoList", JSON.stringify(updatedList))
}

  function handleDelete(id){
    let deleteList = lists.filter((item, index)=> index !== id)
    setLists(deleteList)
    localStorage.setItem("toDoList", JSON.stringify(deleteList))
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>
      <main className='main'>
        <Input 
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
        />
        <List 
          lists={lists}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default App;
