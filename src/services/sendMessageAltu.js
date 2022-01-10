var axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

async function sendMessageAltu(data, type, subscription) {
  try {
    let url = "https://www.altubots.com/api/v2/treinamento/362";
    console.log(JSON.stringify({ data, type, subscription }));
    const response = await axios({
      method: "POST",
      url,
      params: {
        homol: 1,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.TOKEN_ALTU,
      },
      data: {
        identifier: subscription,
        input: {
          text: type === "file" ? "FILE_SEND" : data.contents[0].text,
        },
        context: {
          to: data.to,
          from: data.from,
          details: data.contents[0],
        },
        returnContext: true,
      },
    });

    return response.data || {};
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = sendMessageAltu;
