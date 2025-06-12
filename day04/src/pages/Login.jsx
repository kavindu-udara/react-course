import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        axios.patch('http://localhost:3000/login', {
            username,
            password
        }).then(response => {
            navigate('/dashboard');
        }).catch(error => {
            setError('Login failed. Please check your credentials.');
            setLoading(false);
        });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>

                {error && <div style={{ color: 'red' }}>{error}</div>}

                <button type="submit" disabled={loading} style={{ marginTop: '10px' }}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    )
}

export default Login
