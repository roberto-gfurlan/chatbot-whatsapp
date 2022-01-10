const { Client, WebhookController } = require("@zenvia/sdk");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const typeOfResponse = require("./typeOfResponse");
const sendMessageAltu = require("./services/sendMessageAltu");
const sendMessageWpp = require("./services/sendMessageWpp");

dotenv.config();

const client = new Client(process.env.ZENVIA_TOKEN);

const whatsapp = client.getChannel("whatsapp");
const webhook = new WebhookController({
  channel: "whatsapp",
  messageEventHandler: async (messageEvent) => {
    console.log("CRU", JSON.stringify(messageEvent));
    console.log("====================================");
    await sendMessageAltu(
      messageEvent.message,
      messageEvent.message.contents[0].type,
      messageEvent.subscriptionId
    );
  },
});

webhook.app.use(bodyParser.json());

webhook.app.post("/answer", async (req, res) => {
  console.log("RESPONSE", JSON.stringify(req.body));
  console.log("====================================");
  let response = await typeOfResponse(req.body);
  whatsapp.sendMessage(req.body.context.to, req.body.context.from, ...response);
  res.end();
});

webhook.on("listening", () => {
  console.info("Webhook is listening port 3000");
});

webhook.init();
