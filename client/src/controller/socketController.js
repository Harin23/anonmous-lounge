import socket from '../utils/socket';

export function registerNewuser(name){
    socket.emit('new-user', name);
}

export function listenForUsers(getUsers){
    socket.on('update-users', (users)=>{
        getUsers(users);
    })
}

export function sendMessageSocket(message){
    socket.emit('sendMessage', message)
}

export function listenForMessages(){
    socket.on('message', (message)=>{
        
    })
}