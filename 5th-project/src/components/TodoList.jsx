import React from 'react'
import TodoCard from "./TodoCard.jsx"

export default function TodoList({todos, deleteTodo, editTodo}) {

  return (
    <ul className='main'>
      {todos.map(function (name, index){
        return (
        <TodoCard editTodo = {editTodo} deleteTodo = {deleteTodo} index = {index} key = {index} text = {name}/>
      )
    })}
    </ul>
  )
}
