# Node.js RabbitMQ Integration

## Overview

This project demonstrates a Node.js application that integrates with RabbitMQ, a message broker, to send and receive messages through a queue. The application uses Express for handling HTTP requests and the amqplib library for RabbitMQ integration.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mayes243/rabbitmq-nodejs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd rabbitmq-nodejs
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Using Docker

1. Build the Docker image:

   ```bash
   docker compose up
   ```

### User API

POST

```bash
http://localhost:8080/api/send

```

This endpoint allows you to send a message using RabbitMQ. It expects a JSON payload with a `message` request body.

### Request or payload

```json
{
  "message": "Your message here"
}
```

### Responses Success (200 OK)

```json
{
  "status": "Ok",
  "message": "Message successfully sent!"
}
```

Description: The message was successfully published to the RabbitMQ queue.

#### Bad Request (400 Bad Request)

```json
{
  "status": "BAD_REQUEST",
  "message": "The request must include a non-empty 'message' property in the request body."
}
```
