import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div style={{ padding: '10px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
            this is the header

            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <li>
                    <Link to={"/"} >Home</Link> 
                </li>
                <li>
                    <Link to={"/login"} >Login</Link>
                </li>
                <li>
                    <Link to={"/dashboard"} >Dashboard</Link>
                </li>
            </ul>

            <hr />
        </div>
    )
}

export default Header
