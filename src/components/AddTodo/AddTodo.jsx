import { useState } from "react"

function AddTodo(){
    const [todoText, setTodoText]=useState('')

    return (
        <>
            <input 
                placeholder="add your next item"
                onChange={(e)=>setTodoText(e.target.value)}
                value={todoText}
            />
            <button onClick={()=>{
                addTodos(todoText)
                setTodoText('')
            }}>Submit</button>
        </>
    )
}

export default AddTodo;