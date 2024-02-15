// Import and run router from express
import { Router } from 'express'
const router = Router()

// Define a GET route for fetching the list of products
router.get('/products', (req, res) => {
  const products = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 150 }
    // Add more products as needed
  ]
  res.send(products)
})

// Export the router
export default router
