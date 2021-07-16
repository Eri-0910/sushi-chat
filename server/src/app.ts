import express from "express";
import { createServer } from "http";
import createSocketIOServer from "./ioServer";

const app = express();
const httpServer = createServer(app);

createSocketIOServer(httpServer);

const PORT = process.env.PORT || 7000;
// サーバーをたてる
httpServer.listen(PORT, function () {
  console.log("server listening. Port:" + PORT);
});

app.get("/", (req, res) => res.send("ok"));
