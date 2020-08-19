const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const pkg = require('./package.json')
const version = pkg.version

const app = express()

//add other middleware

app.use(express.static('dist'))
// app.use('/react', express.static('react-app/build'))
// app.use('/vue', express.static('vue-app/dist'))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/api', (req, res) => {
  res.status(200).send(`Welcome to webapp-starter api v${version}`)
})

app.get('/api/version', (req, res) => {
  res.status(200).send(`${version}`)
})

//start app
const port = process.env.PORT || 4000

app.listen(port, () => console.log(`App is listening on port ${port}.`))
