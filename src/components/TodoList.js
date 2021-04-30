import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {

    const [Todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...Todos]

        setTodos(newTodos)
    };

    const removeTodo = id => {
        const removeArr = [...Todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    const completeTodo = id => {
        let updatedTodos = Todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div className='todo-app'>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo Todos={Todos} completeTodo={completeTodo} removeTodo={removeTodo} />
        </div>
    )
}

export default TodoList
