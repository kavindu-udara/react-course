import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = 3000;

app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.json({ message: 'API server is running!' });
});

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.post('/login', (req, res) => {

    const { username, password } = req.body;
    
    if (username === 'admin' && password === 'password') {
        res.json({ message: 'Login successful!' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

