import "dotenv/config";
import express from "express";

const port = process.env.SERVER_PORT;
const server = express();
server.use(express.json());

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
