require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

var users={};

io.on("connection", (socket) => {
  console.log("New client connected", socket.id, socket.username);

  socket.on("new-user", (data)=>{
    // console.log(data)
    socket.join('chat')
    users[socket.id] = data;
    // socket.emit('new-user-registered', 'true')
    io.emit('new-user-registered', 'true')
    console.log(users)
    // var clients = io.engine.clientsCount
    // console.log(clients)
  })

  socket.on("sendMessage", (data) =>{
    io.emit('message', `${users[socket.id]}:${data.message}`);
  });

  socket.on("disconnect", () => {
    console.log(users[socket.id], " disconnected");
    delete users[socket.id];
    // console.log(users)
  });

});

app.get('/users', (req, res)=>{
  res.json(Object.values(users));
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));