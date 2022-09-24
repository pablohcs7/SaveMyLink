const express = require('express')
const cors = require('cors')

const saveMyLinksRoutes = require('./saveMyLinks.routes')

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(saveMyLinksRoutes)

app.get('/health', (req, res) => {
  return res.json('up')
})

app.listen(port, () => console.log('Server up in 3333'))
