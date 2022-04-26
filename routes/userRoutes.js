const db = require('../db/index')
const router = require('express').Router()

router.post('/register', async (req, res) => {

    //validate request
    if (!req.body.email) return res.status(400).send("Ooops.. Email missing")
    if (!req.body.username) return res.status(400).send("Ooops.. Username missing")
    if (!req.body.userpassword) return res.status(400).send("Ooops.. Password missing")

    //register new user
    db.query('INSERT INTO users (email, username, userpassword) VALUES($1, $2, $3)', [req.body.email, req.body.username, req.body.userpassword], (err, result) => {
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
        return res.status(200).send(result)

    })
})

router.get('/findOne', async (req, res) => {

    //validate request
    if (!req.body.username) return res.status(400).send('Username required..')

    //find a new user
    db.query('SELECT * FROM users WHERE position (username in $1)>0', [req.body.username], (err, result) => {
        if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(result.rows)

    })
})

router.delete('/delete/:username', async (req, res) => {

    //validate request
    if (!req.params.username) return res.status(400).send('Username required..')

    db.query("DELETE FROM users WHERE position (username in $1)>0", [req.params.username], (err, result) => {
        if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).json({ message: "User deleted successfully..." })
    })

})

router.put('/update/:username', async (req, res) => {

    //validate request
    if (!req.params.username) return res.status(400).send('Username required..')

    db.query("UPDATE users SET email = $1, userpassword = $2 WHERE username =$3", [req.body.email, req.body.userpassword, req.params.username], (err, result) => {
        if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).json({ message: "User modified..." })
    })

})

module.exports = router