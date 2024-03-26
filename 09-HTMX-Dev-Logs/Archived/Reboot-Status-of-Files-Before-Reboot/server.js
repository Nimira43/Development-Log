import express from 'express'

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/users', async (req, res) => {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

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

