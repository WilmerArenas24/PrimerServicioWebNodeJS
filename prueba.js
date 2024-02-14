const express = require('express')
const app = express()
const router = express.Router()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

router.get('/', (req, res) => {
    res.send("Hello world")
})

router.get('/name', (req, res) => {
    // Cambiado req, res, name a req.query.name para obtener el parámetro de la consulta
    res.send(req.query.name)
})

router.post('/user', (req, res) => {
    // Corregido la declaración de la variable user y agregado el signo de igual en lugar de dos puntos
    var user = {
        'Username': req.body.name,
        'lastname': req.body.lastname,
        'age': req.body.age,
    }

    res.send(user)
})

app.use(router)
app.listen(port, () => {
    console.log('Listening on port ' + port)
})
