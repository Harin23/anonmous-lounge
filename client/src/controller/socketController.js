import socket from '../utils/socket';

export function registerNewuser(name){
    return new Promise((resolve, reject)=>{
        socket.emit('new-user', name);
        socket.on('new-user-registered', (payload)=>{
            if(payload==='true'){
                resolve(name)
            }else{
                reject(payload)
            }
            })
    })
}