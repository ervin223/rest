const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const widgets = [
    {id: 1, name: "Super Mario Bros. Wonder"},
    {id: 2, name: "Animal crossing"},
    {id: 3, name: "Seiklus"},
]

app.get('/games', (req, res) =>
{
    if (typeof games[req.parem.id - 1] === 'undefined'){
        return res.status(404).send({error: "Game not found, game not gaming"})}

    res.send(games(req.parem.id - 1))
})

app.get('/games/:id', (req, res) =>
{
    res.send(games)
})

app.post('/games', (req, res) => {
    if (req.body.name || req.body.price) {
        return res.status(400).send({error: 'one or multiple parameters missing'})
    }
        let newGame = {
            id: games.length +1,
            price: req.body.price,
            name: req.body.name 
        }
        games.push(newGame)
        res.status(201).location('localhost:8080/games/'+(games.lenght -1)).send(newgame)
    })

app.delete('/games/:id', (req, res) =>
{
    if (typeof games[req.params.id - 1]=== 'undefined')
    {
        return res.status(404).send(
            {error: 'game not found, no gaming for you'})
        }
    games.splice(req.params.id -1, 1)
    res.status(204).send({error: 'contact not contending (no context)'})        
})

app.put('/games/:id', (req, res) => {
    res.send("Request Called")
})


app.listen(8080, () =>
    console.log('api töötab adressil: http://localhost:8080')
)