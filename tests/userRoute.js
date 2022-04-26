const chai = require('chai')
const server = require('../server')
const chatHttp = require('chai-http')
const chaiHttp = require('chai-http')

// assertion style
chai.should()

chai.use(chaiHttp)

describe('User API', () => {

    /**
     * Test POST route
     */
    describe('POST /api/v1/users/register', () => {
        it('Should create a new user', (done) => {

            const user = {
                username: "debby",
                password: 'debby',
                email: 'debby'
            }
            chai.request(server)
                .post('/api/v1/users/register')
                .send(user)
                .end((err, response) => {
                    response.should.have.status(201)
                    response.body.should.have.property('username').eq('debby')
                    response.body.should.have.property('email').eq('debby')
                    done()
                })
        })

    })

    /**
     * Test GET route
     */
    describe('GET /api/v1/users/findAll', () => {
        it('Should get all users', (done) => {
            chai.request(server)
                .get('/api/v1/users/findAll')
                .end((err, response) => {
                    response.should.have.status(200)
                    response.should.be.a('object')
                    done()
                })
        })
    })


    /**
     * Test GET by username route
     */

    describe('GET /api/v1/users/findOne', () => {
        it('Should get single user with username : debby', (done) => {

            const username = "debby"

            chai.request(server)
                .get('/api/v1/users/findOne')
                .send(username)
                .end((err, response) => {
                    response.should.have.status(200)
                    response.should.be.a('object')
                    response.should.have.property('password')
                    response.should.have.property('email')
                    response.should.have.property('username')
                    done()
                })
        })
    })

    /**
     * Test PUT route
     */

    describe('PUT /api/v1/users/update/:username', () => {
        it('Should delete user with username : debby', (done) => {

            const username = "debby"

            const user = {
                email: "debbyemail",
                password: "debbypassword"
            }

            chai.request(server)
                .get('/api/v1/users/update/' + username)
                .send(user)
                .end((err, response) => {
                    response.should.have.status(200)
                    response.should.be.a('object')
                    response.should.have.property('message')
                    done()
                })
        })
    })
    /**
     * Test DELETE route
     */

    describe('DELETE /api/v1/users/delete/:username', () => {
        it('Should delete user with username : debby', (done) => {

            const username = "debby"

            chai.request(server)
                .get('/api/v1/users/findOne/' + username)
                .send(username)
                .end((err, response) => {
                    response.should.have.status(200)
                    response.should.be.a('object')
                    response.should.have.property('message')
                    done()
                })
        })
    })
})