
// Use a PUT /users/:id route to fully update a user object.


const express = require('express');
const app = express();

app.use(express.json());

const PORT = 8000;

let users = [
    { id: 1, name: 'Arya Stark', email: 'arya@winterfell.com' },
    { id: 2, name: 'Frodo Baggins', email: 'frodo@shire.me' },
    { id: 3, name: 'Luna Lovegood', email: 'luna@hogwarts.edu' }
];

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const userId = parseInt(id);
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found ' });
    }

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }

    users[userIndex] = { id: userId, name, email };
    res.status(200).json(users[userIndex]);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});