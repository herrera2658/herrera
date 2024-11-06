const express = require('express');
const path = require('path');
const colors = require('colors'); 

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => res.redirect('/login'));


app.get('/login', (req, res) => {
    console.log("Accediendo a la página de login".green); 
    res.render('login');
});


app.get('/register', (req, res) => {
    console.log("Accediendo a la página de registro".yellow);
    res.render('register');
});


app.get('/welcome', (req, res) => {
    const userName = "Usuario"; 
    console.log("Accediendo a la página de bienvenida".cyan);
    res.render('welcome', { userName });
});


app.listen(3000, () => console.log('Server running on http://localhost:3000'.blue));
