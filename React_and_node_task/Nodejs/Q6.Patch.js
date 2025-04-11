
// Create a PATCH /users/:id endpoint to update only selected fields.

const express = require('express');
const app = express();

app.use(express.json());

const PORT = 8000;

let users = [
    { id: 1, name: 'Arya Stark', email: 'arya@winterfell.com' },
    { id: 2, name: 'Frodo Baggins', email: 'frodo@shire.me' },
    { id: 3, name: 'Luna Lovegood', email: 'luna@hogwarts.edu' }
];

app.patch('/users/:id', (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    const userId = parseInt(id);
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }


    Object.assign(user, updates);
    res.status(200).json(user);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
);

