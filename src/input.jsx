import React from 'react'

function Input({ input, setInput, handleSubmit }) {
  return (
    <>
      <form className='input-field' onSubmit={handleSubmit}>
        <input
          type='text'
          className='input'
          value={input}
          onChange={(e) => { setInput(e.target.value) }}
          placeholder='Type something...'
          required
          autoFocus
        ></input>
        <input
          type='submit'
          value='Submit'
          className='submit'
        ></input>
      </form>
    </>
  )
}

export default Input