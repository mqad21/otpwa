import { Server } from "socket.io";
import { expressServer } from "../index.js";

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
