import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {

    const [Todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...Todos]

        setTodos(newTodos)
        console.log(...Todos)
    }

    return (
        <div className='todo-app'>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubit={addTodo} />
        </div>
    )
}

export default TodoList
