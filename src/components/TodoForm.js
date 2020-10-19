//great extension - 'type rfce'
//also emmet trick - add that

import React, { useState, useEffect, useRef } from 'react'

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

//this doesn't work - maybe try yarn instead of npm next time

function TodoForm(props) {
  const [input, setInput] = useState('')

  const inputRef = useRef(null)
  useEffect(() => {
  inputRef.current.focus()
})

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: uuidv4(),
      text: input
    })

    setInput('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add a todo" 
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Add todo</button>
    </form>
  )
}

export default TodoForm
