const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const vr = require('./controller/velvetRoom')
const PORT = 3001

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/api/necronomicon', vr.readNecronomicon)
app.post('/api/createMonster', vr.createMonster)
app.delete('/api/darkStalkers/:id', vr.deleteMonster)

app.listen(PORT, () => {
    console.log(`Nothing like a good ${PORT} wine`)
})

