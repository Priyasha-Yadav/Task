
// Create a DELETE /users/:id route to remove a user from the list.

const express = require('express');
const app = express();

app.use(express.json());

const PORT = 8000;

let users = [
    { id: 1, name: 'Arya Stark', email: 'arya@winterfell.com' },
    { id: 2, name: 'Frodo Baggins', email: 'frodo@shire.me' },
    { id: 3, name: 'Luna Lovegood', email: 'luna@hogwarts.edu' }
];

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const userId = parseInt(id);
    const userExists = users.some(u => u.id === userId);

    if (!userExists) {
        return res.status(404).json({ error: 'User not found ' });
    }

    users = users.filter(u => u.id !== userId);
    res.sendStatus(204); 
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});