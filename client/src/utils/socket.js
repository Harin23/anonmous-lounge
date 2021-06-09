import socketIOClient from "socket.io-client";
import {HOSTNAME} from './host'; 
const socket = socketIOClient(HOSTNAME);
export default socket;