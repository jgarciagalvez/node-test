// Import files
import { Router } from 'express'
import db from '../db.js'

// Create router
const router = Router()

// Define a GET route for fetching the list of users
router.get('/users', (req, res) => {
  let users = db.query('SELECT * FROM ')
  res.send('List of users')
})

// Define a GET route for fetching a single user
router.get('/users/1', (req, res) => {
  res.send('User number 1')
})

// Export the router
export default router
