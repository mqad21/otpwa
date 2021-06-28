import express from "express";
import cors from "cors";
import routes from "./commons/routes.js";
import conn from "./modules/wa_connection.js";
import socket from "./modules/socket.js";

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

// Connect to WA Web.
conn.connect();

app.use(routes);

export const expressServer = app.listen(port, () => {
  console.log("Server is listening at port " + port);
});

socket();
