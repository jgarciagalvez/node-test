// import express
import express from 'express'
// run the express function
const app = express()

// Import the users router module
import usersRouter from './routes/users.js'
import productsRouter from './routes/products.js'

// create home route
app.get('/', (req, res) => {
  res.send('Hello Change!')
})

// Tell the app to use the different routers
app.use(usersRouter)
app.use(productsRouter)

// keep the server open
app.listen(4000, () => {
  console.log('Server running on port 4000')
})
