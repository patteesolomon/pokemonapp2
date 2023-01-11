const Express = require('express');
const Port = 3001;
const app = Express();
const pokemon = require('./models/pokemon.js');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Index
app.get("/", (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
    res.send(pokemon);
});

//last 
app.listen(Port, () => {
    console.log('listening on ' + Port);
});