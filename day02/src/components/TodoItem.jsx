import React from 'react'

function TodoItem(props) {
    return (
        <div className='todo-item'>
            <div>{props.text}</div>
            <button>delete</button>
        </div>
    )
}

export default TodoItem
