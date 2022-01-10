var axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

async function sendMessageWpp(body) {
  try {
    console.log("SENDMESSAGEWPP", JSON.stringify(body));
    let url = "https://api.zenvia.com/v2/channels/whatsapp/messages";
    const response = await axios({
      method: "POST",
      url,
      headers: {
        "Content-Type": "application/json",
        "X-API-TOKEN": process.env.ZENVIA_TOKEN,
      },
      data: body,
    });
    return response.data || {};
  } catch (error) {
    console.log(error.response ? error.response.data : error);
    throw new Error(error);
  }
}

module.exports = sendMessageWpp;
