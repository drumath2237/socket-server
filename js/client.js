var socket = io()

let sendMsg = () => {
  let msg = document.getElementById('msg-text')
  socket.emit('message', msg.value)
  msg.value = ''
}

socket.on('message', (eventData) => {
  console.log(eventData);
  let text = document.getElementById('text-client')
  text.innerHTML = eventData
})
