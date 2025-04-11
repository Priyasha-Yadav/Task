
// Create an endpoint /users that returns a hardcoded list of user objects.

// server.js
const express = require('express');
const app = express();

app.use(express.json());

const PORT = 8000;

const users = [
    { id: 1, name: 'Arya Stark', email: 'arya@winterfell.com' },
    { id: 2, name: 'Frodo Baggins', email: 'frodo@shire.me' },
    { id: 3, name: 'Luna Lovegood', email: 'luna@hogwarts.edu' }
];

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/users', (req, res) => {
    res.json(users); 
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
