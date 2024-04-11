import React from 'react'

function List({ lists, handleCheck, handleDelete }) {

  return (
    <>
      {lists.length ? (
        <ul>
          {lists.map((items, index) => {
            return (
            <li key={index} className='items'>
              <input
                type='checkbox'
                className='checkbox'
                checked={items.checked}
                onChange={()=>handleCheck(index)}
              ></input>
              <p 
                style={items.checked ? {textDecoration:'line-through'}:null}
                onDoubleClick={()=>handleCheck(index)}
              >{items.list}</p>
              <button className='del-btn' onClick={()=>handleDelete(index)}>Delete</button>
            </li>
            )
          })}
        </ul>
      ) : null
      }
    </>
  )
}

export default List