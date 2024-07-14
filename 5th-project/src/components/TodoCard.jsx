import React from 'react'

export default function TodoCard(props) {
  return (
    <li className='todoItem'>{props.text}
        <div className="actionsContainer">
          <button onClick = {() => props.editTodo(props.index)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick = {() => {
            props.deleteTodo(props.index)
          }}>
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
    </li>
  )
}
