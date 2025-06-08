import { useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'

function App() {

  const [inputText, setInputText] = useState('');
  const [todosList, setTodosList] = useState([]);

  const addTodo = () => {
    if (inputText.trim() !== '') {

      const newTodo = {
        id: todosList.length + 1,
        text: inputText
      }

      setTodosList([...todosList, newTodo]);

      setInputText('');

    } else {
      alert('Please enter a todo item');
    }
  }

  const deleteTodo = (id) => {
    setTodosList(todosList.filter(todo => todo.id !== id));
  }

  return (
    <div className='container'>

      <div className='box'>

        {/* input box */}
        <div className='input-box'>
          <input type="text" value={inputText} onChange={(e) => { setInputText(e.target.value) }} />
          <button onClick={() => addTodo()} >Add</button>
        </div>

        {
          todosList.map(todo => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
          ))
        }

      </div>

    </div>
  )
}

export default App
