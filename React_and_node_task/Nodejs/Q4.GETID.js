
// Create a route /users/:id that returns a user by ID.

const express = require('express');
const app = express();

app.use(express.json()); 

const PORT = 8000;

let users = [
    { id: 1, name: 'Arya Stark', email: 'arya@winterfell.com' },
    { id: 2, name: 'Frodo Baggins', email: 'frodo@shire.me' },
    { id: 3, name: 'Luna Lovegood', email: 'luna@hogwarts.edu' }
];

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const userId = parseInt(id); // Ensure it's a number

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ error: 'User not found 🧟‍♂️' });
    }

    res.json(user);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
