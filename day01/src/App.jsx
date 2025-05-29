import './App.css'
import TodoItem from './components/TodoItem'

function App() {

  return (
    <div className='container'>
      <div className='box'>

        {/* input box */}
        <div className='input-box'>
          <input type="text" />
          <button>Add</button>
        </div>

        {/* todo items */}
        <TodoItem text="hello" />
        <TodoItem text="yoyo" />
        <TodoItem text="hsdfsd" />

      </div>
    </div>
  )
}

export default App
