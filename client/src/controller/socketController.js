import socket from '../utils/socket';

export function registerNewuser(data){
    socket.emit('new-user', data);
}

export function listenForUsers(getUsers){
    socket.on('update-users', (users)=>{
        getUsers(users);
    })
}

export function sendMessageSocket(message){
    socket.emit('sendMessage', message)
}

export function listenForMessages(getMessage){
    socket.on('message', (message)=>{
        getMessage(message);
    })
}