import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Todo({Todos, completeTodo}) {
    const [Edit, setEdit] = useState({
        id: null,
        value: ''
    })

    return Todos.map((todo, index) => (
        <>
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</div>
        </div>
        <div className="icons">
            <RiCloseCircleLine/>
            <TiEdit />
        </div>
        </>
    ))
}

export default Todo
