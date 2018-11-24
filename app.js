const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const PORT = process.env.PORT || 3000

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

io.on('connection', (socket) => {

  console.log('connected')

  socket.on('message', (eventData) => {
    console.log(eventData)
    io.emit('message', eventData)
  })

  socket.on('disconnect', () => {
    console.log('disconnected')
  })
});

http.listen(PORT, function() {
  console.log('server listening. Port:' + PORT);
})
