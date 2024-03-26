import express from 'express'

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/users', (req, res) => {
    const users = [
        {
            id: 100,
            name: 'Nelson Piquet', 
            email: 'nelson@benetton.com'
        },
        {
            id: 107,
            name: 'Ayrton Senna', 
            email: 'ayrton@senna.com'
        },
        {
            id: 112,
            name: 'Nigel Mansell', 
            email: 'nigel@williams.com'
        },
        {
            id: 123,
            name: 'Alain Prost', 
            email: 'a.prost@renault.com'
        }        
    ]
    res.send(`
        <h1 class="text-2xl font-bold my-4">Users</h1>
        <ul>
            ${users.map((user) => `<li>${user.name}</li>`).join('')}
        </ul>
    `)
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})