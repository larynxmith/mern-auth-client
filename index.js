//required
let cors = require('cors')
let express = require('express')

//instance
let app = express()

//middleware
app.use(cors())
app.use(express.urlencoded({ extended: false}))
app.use(express.json({ limit: '10mb' }))

//Catch-All route
app.get('*', (req, res) => {
    res.status(404).send({ message: 'Not Found' })
})


app.listen(process.env.PORT || 3000)