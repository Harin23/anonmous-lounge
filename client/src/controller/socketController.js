import socket from '../utils/socket';

export function registerNewuser(name){
    return new Promise((resolve, reject)=>{
        socket.emit('new-user', name);
        socket.on('update-users', ()=>{
            resolve(name)
        })
    })
}

export function listenForUsers(fetchUsers){
    socket.on('update-users', ()=>{
        fetchUsers();
    })
}