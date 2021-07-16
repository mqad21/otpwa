import express from "express";
import cors from "cors";
import routes from "./commons/routes.js";
import conn from "./modules/wa_connection.js";
import socket from "./modules/socket.js";
import dotenv from "dotenv";
import sendDisconnectmail from "./modules/send_disconnect_mail.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.NODE_PORT;

// Connect to WA Web.
conn.connect();

app.use(routes);

export const expressServer = app.listen(port, () => {
  console.log("Server is listening at port " + port);
});

socket();
