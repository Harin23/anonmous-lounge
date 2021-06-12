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
  console.log("New client connected", socket.id);

  socket.on("new-user", (data)=>{
    if(data){
      socket.join('chat')
      users[socket.id] = data;
      io.emit('update-users', Object.values(users))
    }
    // console.log(users)
  })

  socket.on("sendMessage", (data) =>{
    if(!!users[socket.id]){
      io.emit('message', `${users[socket.id].name}: ${data}`);
    }else{
      io.emit('message', `unknown:${data}`);
    }
  });

  socket.on("disconnect", () => {
    // console.log(users[socket.id], " disconnected");
    delete users[socket.id];
    io.emit('update-users', Object.values(users))
    // console.log(users)
  });

});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));