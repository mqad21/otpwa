import socket from "socket.io";
import { expressServer } from "../index.js";

const { Server } = socket;

let io;

export default () => {
  io = new Server(expressServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
};

export { io };
