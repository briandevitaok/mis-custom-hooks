import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [

]

const init = () => { 
    return JSON.parse(localStorage.getItem('todos')) || [];
    }   

export const useTodo =  () => {


    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    

    useEffect(() => {
       localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])
    


    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload:todo
        }
        dispatch(action)
    }


    const handlRemoveTodo = (id) => {
        dispatch({
            type: 'Delete Todo',
            payload: id
        })
    }

    const handlToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }


    return {
        todos,
        handleNewTodo,
        handlRemoveTodo,
        handlToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,

    }
}