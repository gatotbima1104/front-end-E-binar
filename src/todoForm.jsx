import React from 'react'
import { useState } from 'react'

const TodoForm = (props) => {
    const [input, setInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        
        // props.handleSubmit({
        //     text: input
        // })
        setInput('');
    }

    const handleChange = e => {
        setInput(e.target.value)
    }

  return (
    <div>
      <form className='todo-form text-center' onsubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='add your plan' 
        value={input}
        name='text'
        onChange={handleChange}
        />
        <button className='todo-button' >Add</button>
      </form>
    </div>
  )
}

export default TodoForm
