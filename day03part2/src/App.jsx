import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  const fetchApi = () => {
    fetch('https://cataas.com/cat?json=true')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching cat:', error));
  }

  useEffect(() => {
    fetchApi();
  }, [count])

  return (
    <>
      <h1>Random Cat</h1>

      <button onClick={() => fetchApi()}>get a cat</button>
      <input type="number" value={count} />
      <button onClick={() => setCount(count+1)}>count</button>

      {
        data && (
          <div>
            <img src={`${data.url}`} alt="Random Cat" width='100%' />
            <ul>
              {
                data.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))
              }
            </ul>
          </div>
        )
      }

    </>
  )
}

export default App
