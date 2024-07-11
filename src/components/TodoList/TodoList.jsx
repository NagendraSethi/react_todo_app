import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";


function TodoList(){

    const {todos,dispatch}=useContext(TodoContext)

    function onDeleteTodo(id){
        // const newTodoList = todos.filter(todo=>todo.id!=id)
        // setTodos(newTodoList)
        dispatch({type:'delete_todo',payload:{id}})

    }

    function onEditTodo(id, newTodo){
        // const newTodoList=todos.map(todo=>{
        //     if(todo.id==id){
        //         todo.text=newTodo
        //     }
        //     return todo;
        // });
        // setTodos(newTodoList);
        dispatch({type:'edit_todo',payload:{id,newTodo}})

    }

    function onFinishedTodo(id, state){
        // const newTodoList=todos.map(todo=>{
        //     if(todo.id==id){
        //         todo.isFinished=state;
        //     }
        //     return todo;
        // });
        // setTodos(newTodoList);
        dispatch({type:'finish_todo',payload:{id, state}})

    }

    return (
        todos && todos.map(
            (todo)=><Todo 
                        key={todo.id} 
                        text={todo.text} 
                        isFinished={todo.isFinished}
                        editTodo={(newTodo)=> onEditTodo(todo.id, newTodo)}
                        deleteTodo={()=>onDeleteTodo(todo.id)}
                        finishTodo={(state)=>onFinishedTodo(todo.id, state)}
                    />
        )
    )
}

export default TodoList;