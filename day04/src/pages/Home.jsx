import React from 'react'
import axios from 'axios'

const Home = () => {

    const handleClick = () => {
        axios.get('http://localhost:3000/hello').then(response => {
            alert(response.data.message);
        }).catch(error => {
            alert('Error fetching data: ' + error.message);
        })
    }

    return (
        <div>
            This is the Home page. You can add your content here.
            
            <button onClick={() => handleClick()}>hello</button>

        </div>
    )
}

export default Home