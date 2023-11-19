const io = require('socket.io')(3001, {
    cors: {
        origin: ['http://localhost:3000'],
    },
})

let messages = [];

io.on('connection', socket => {
    console.log(socket.id)

    socket.on('send-message', message => {

        if(message != null && message != ''){
            messages.push(message)
            console.log(messages)
            io.emit('receive-message', messages)
        }
    })
})