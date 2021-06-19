// import socket from '../utils/socket';

export function registerNewuser(socket, data){
    socket.emit('new-user', data);
}

export function listenForUsers(socket, getUsers){
    socket.on('update-users', (users)=>{
        getUsers(users);
    })
}

export function sendMessageSocket(socket, message){
    socket.emit('sendMessage', message)
}

export function listenForMessages(socket, getMessage){
    socket.on('message', (message)=>{
        getMessage(message);
    })

    socket.on('connect_error', function() {
        getMessage("Error: Not connected to server");
    });
}