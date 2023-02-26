import express from 'express'

const app = express()

app.get('/', (request, response) => {
    return response.json({ message: 'HI'})
})

app.listen(7777)
