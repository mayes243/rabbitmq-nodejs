import express from "express";
import constrollers from "./controller.js";
import RabbitMQConfig from "./config.js";

const app = express();

app.use(express.json());

app.post("/api/send", constrollers.sendMessage);

//  consume from "my-channel"
const queue = "my-queue";

const options = { durable: true };

const rabbitService = new RabbitMQConfig();

await rabbitService.createQueue(queue, options);

await rabbitService.subscribeToQueue(queue, (message) => {
  console.log("Received message:", message);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
