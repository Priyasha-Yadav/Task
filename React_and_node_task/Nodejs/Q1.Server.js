// Set up a basic Express server that responds with "Server is running" on the root route (/).

// npm i express

// server.js
const express = require('express');
const app = express();
app.use(express.json());

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req,res)=>{
    res.send('Server is running');
})