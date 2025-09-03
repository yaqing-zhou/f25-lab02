import { newRenderer } from './renderer.js'
import { Shape } from './shapes/shape.js'
import { rectangle } from './shapes/rectangle.js'
import { circle } from './shapes/circle.js'
import { square } from './shapes/square.js'

const shape1: Shape = rectangle(2, 3)
const shape2: Shape = circle(2)
const shape3: Shape = square(2)

const renderer1 = newRenderer(shape1)
const renderer2 = newRenderer(shape2)
const renderer3 = newRenderer(shape3)

renderer1.draw()
renderer2.draw()
renderer3.draw()
