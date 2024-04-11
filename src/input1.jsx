import React, { useEffect, useState } from "react";
import Todolist from "./todolist";


function Input1() {
    let [input, setInput] = useState("")
    const [list, setList] = useState([]);
    
    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem("toDoList"));
        try {
          if (Array.isArray(storedList)) {
            setList(storedList);
          }
        } catch (error) {
          console.error("Error fetching data from localStorage:", error);
        }
      }, [input]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()==="") return[];
        handleInput();
    }
    const handleInput = ()=>{
        let setNewInput = ([...list, { checked: false, Label: input }])
        setList(setNewInput)
        localStorage.setItem("toDoList", JSON.stringify(setNewInput))
        setInput("")
    }
    function handleCheck(id) {
        let updatedList = list.map((item, index) =>
            index === id ? { ...item, checked: !item.checked } : item
        );
        setList(updatedList);
        localStorage.setItem("toDoList", JSON.stringify(updatedList));
    }

    function handleDelete(id) {
        let updatedList = list.filter((item, index) => index !== id);
        setList(updatedList);
        localStorage.setItem("toDoList", JSON.stringify(updatedList));
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='search'>
                    <input
                        type='text'
                        placeholder='Type Here'
                        className='list-input'
                        required
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className='enter' type="submit">Enter</button>
                </div>
            </form>
            <Todolist
                list={list}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        </div>
    )
}


export default Input1;