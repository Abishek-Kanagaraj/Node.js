const EventEmitter = require('node:events')

const emitter = new EventEmitter()

emitter.on("order-pizza", (size,topping) => {
    console.log(`Order received! on ${topping} pizza - ${size}`)
})

emitter.emit("order-pizza","large","chicken")
