import { useContext, useState } from "react"
import TodoContext from "../../context/TodoContext"

function AddTodo(){
    const [todoText, setTodoText]=useState('')
    const {todos, dispatch}=useContext(TodoContext)

    function addTodo(todoText){
        // let nextId=todos.length+1;
        // setTodos([...todos,{id:nextId, text:todoText, isFinished: false}])
        dispatch({type:'add_todo',payload:{todoText}})

    }

    return (
        <>
            <input 
                placeholder="add your next item"
                onChange={(e)=>setTodoText(e.target.value)}
                value={todoText}
            />
            <button onClick={()=>{
                addTodo(todoText)
                setTodoText('')
            }}>Submit</button>
        </>
    )
}

export default AddTodo;