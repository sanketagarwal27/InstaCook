// src/services/socketService.js
import { io } from "socket.io-client";

let socket = null;

export const initializeSocket = (userId) => {
  if (!socket) {
    socket = io("http://localhost:3000", {
      query: { userId },
      withCredentials: true,
      autoConnect: false,
    });
  }
  return socket;
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
