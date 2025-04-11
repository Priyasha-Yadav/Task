
// Create a POST /users route to add a user to an in-memory array.

const express = require('express');
const app = express();

app.use(express.json()); 

const PORT = 8000;

let users = [
    { id: 1, name: 'Arya Stark', email: 'arya@winterfell.com' },
    { id: 2, name: 'Frodo Baggins', email: 'frodo@shire.me' },
    { id: 3, name: 'Luna Lovegood', email: 'luna@hogwarts.edu' }
];


app.post('/users', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser); // 
    res.status(201).json(newUser); // 
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
