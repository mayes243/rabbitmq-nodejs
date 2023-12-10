import RabbitMQConfig from "./config.js";

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message)
      return res.status(400).json({
        status: "BAD_REQUEST",
        message: "The 'message' parameter cannot be empty.",
      });

    const queue = "my-queue";
    const rabbitMQConfig = new RabbitMQConfig();

    // send message to publish
    await rabbitMQConfig.createQueue(queue);
    await rabbitMQConfig.publishToQueue(queue, message);

    // Close connection
    await rabbitMQConfig.close();

    res.status(200).json({
      status: "Ok",
      message: "Message successfully send!",
    });
  } catch (error) {
    console.log(error);
  }
};

const constrollers = { sendMessage };

export default constrollers;
