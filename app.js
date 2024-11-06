const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => res.redirect('/login'));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));
app.get('/welcome', (req, res) => res.sendFile(path.join(__dirname, 'views', 'welcome.html')));


app.listen(3000, () => console.log('Server running on http://localhost:3000'));