import { Shape } from './shapes/shape.js'

function newRenderer (shape: Shape): { draw: () => void } {
  return {
    draw () {
      const area: number = shape.computeArea()
      console.log(`Shape drawn\nIts area is ${area}`)
    }
  }
}

export { newRenderer }
