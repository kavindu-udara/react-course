import React from 'react'

function TodoItem({todo, deleteTodo}) {
    return (
        <div className='todo-item'>
            <div>{todo.text}</div>
            <button onClick={() => deleteTodo(todo.id)} >delete</button>
        </div>
    )
}

export default TodoItem
