const db = require('../db/index')
const router = require('express').Router()

router.post('/register', async (req, res) => {

    //validate request
    if (!req.body.email) return res.status(400).send("Ooops.. Email missing")
    if (!req.body.username) return res.status(400).send("Ooops.. Username missing")
    if (!req.body.password) return res.status(400).send("Ooops.. Password missing")

    //register new user
    db.query('INSERT INTO users(email, username, password) VALUES($1, $2, $3)', [req.body.email, req.body.username, req.body.password], (err, result) => {
        if (err) {
            return res.status(500).json(err)
        }
        return res.status(201).json({
            email: req.body.email,
            username: req.body.username
        })
    })
})

router.get('/findAll', async (req, res) => {

    //find a new user
    db.query('SELECT * FROM users', (err, result) => {
        if (err) {
            return res.status(500).json(err)
        }
        return res.status(201).json(result)

    })
})

router.get('/findOne', async (req, res) => {

    //validate request
    if (!req.body.username) return res.status(400).send('Username required..')

    //find a new user
    db.query('SELECT * FROM users WHERE username =$1', [req.body.username], (err, result) => {
        if (err) {
            return res.status(500).json(err)
        }
        return res.status(201).json(result)

    })
})

router.delete('/delete/:id', async (req, res) => {

    //validate request
    if (!req.body.username) return res.status(400).send('Username required..')

    db.query("DELETE FROM users WHERE username =$1", [req.body.username], (err, result) => {
        if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).json({ message: "User deleted successfully..." })
    })

})

router.put('/update/:id', async (req, res) => {

    //validate request
    if (!req.body.username) return res.status(400).send('Username required..')

    db.query("UPDATE users SET email = $1, password = $2 WHERE username =$3", [req.body.email, req.body.password, req.body.username], (err, result) => {
        if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).json({ message: "User modified..." })
    })

})