const { Client, WebhookController } = require("@zenvia/sdk");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const typeOfResponse = require("./typeOfResponse");
const sendMessageAltu = require("./services/sendMessageAltu");

dotenv.config();

const client = new Client(process.env.ZENVIA_TOKEN);

const whatsapp = client.getChannel("whatsapp");
const webhook = new WebhookController({
  channel: "whatsapp",
  messageEventHandler: async (messageEvent) => {
    await sendMessageAltu(
      messageEvent.message,
      messageEvent.message.contents[0].type,
      messageEvent.subscriptionId
    );
  },
});

webhook.app.use(bodyParser.json());

webhook.app.post("/answer", async (req, res) => {
   let response = typeOfResponse(req.body);
  await whatsapp.sendMessage(req.body.context.to, req.body.context.from, ...response);
  res.end();
});

webhook.on("listening", () => {
  console.info("Webhook is listening port 3000");
});

webhook.init();
