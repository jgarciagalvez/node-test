// Import files
import { Router } from 'express'
import db from '../db.js'

// Create router
const router = Router()

// Define a GET route for fetching the list of users
router.get('/albums', async (req, res) => {
  try {
    let { rows } = await db.query('SELECT * FROM albums')
    res.json(rows)
  } catch (err) {
    res.json({ error: err.message })
  }
})

// Define a GET route for fetching a single user
router.get('/albums/:albumID', async (req, res) => {
  try {
    let { rows } = await db.query('SELECT * FROM albums')
    res.json(rows)
  } catch (err) {
    res.json({ error: err.message })
  }
})

// Export the router
export default router
