import React, { useState } from 'react'

export default function TodoInput({addTodo, setTodoValue, todoValue}) {

  function addNew(){
    addTodo(todoValue)
    setTodoValue('')
  }

  return (
    <header>
      <input value = {todoValue} onChange = {(event) => setTodoValue(event.target.value)} placeholder='Enter todo...'></input>
      <button onClick = {addNew} >Add</button>
    </header>
  )
}
