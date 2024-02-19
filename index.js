import { timezone } from './constants.js'
import { pi, tau } from './constants.js'
import { calcCircleArea } from './math/functions.js'
import lodash from 'lodash'
import axios from 'axios'

// console.log(timezone)
// console.log(tau)
// console.log(pi)

// console.log(calcCircleArea(10, pi)) // 314
// console.log(calcCircleArea(5, pi)) // 78.5

let a = [1, [2, [3, [4]], 5]]

// console.log(lodash.flatten(a))

let b = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

console.log(b.data)

let object = {}

console.log(lodash.isEmpty(object))
