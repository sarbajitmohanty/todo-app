import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [Input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: Input
        });

        setInput('');

    };


    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
            type='text' 
            placeholder='Add a todo'
            value={Input} 
            name='text'
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}
            />
            <button className='todo-button'>Add todo</button>
        </form>
    )
}

export default TodoForm
