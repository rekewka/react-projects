import { useState, useEffect} from 'react'
import './App.css'
import TodoList from "./components/TodoList.jsx"
import TodoInput from './components/TodoInput.jsx'

function App() {

  let [todos, setTodos] = useState([]) 
  let [todoValue, setTodoValue] = useState('')

    function saveData(listData){
      localStorage.setItem('todos', JSON.stringify({todos : listData}))
    }

    function addTodo(newTodo){
      saveData([...todos, newTodo])
      setTodos([...todos, newTodo])
    }

    function deleteTodo(index){
      const newList = todos.filter(function(todo, todoIndex){
        if(todoIndex != index){
          return todo
        }
      })
      saveData(newList)
      setTodos(newList)
    }

    function editTodo(index){
      const editedValue = todos[index]
      setTodoValue(editedValue)
      deleteTodo(index)
    }

    useEffect(function(){
      if(!localStorage){
        return
      }
      let localTodos = localStorage.getItem('todos')
      if(!localTodos){
        return 
      }
      localTodos = JSON.parse(localTodos).todos
      setTodos(localTodos)
    }, [])

  return (
    <>
      <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue} addTodo = {addTodo}/>
      <TodoList editTodo = {editTodo} deleteTodo = {deleteTodo} todos = {todos}/>
    </>
  )
}

export default App
