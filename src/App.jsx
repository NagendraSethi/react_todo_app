import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

function App() {
  const [todos, setTodos]=useState([])

  function addTodos(todoText){
    let nextId=todos.length + 1;
    setTodos([...todos,{id:nextId, isFinished: false, text:todoText}])
  }
  return (
    <>
      <AddTodo addTodos={addTodos}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </>
  )
}

export default App
