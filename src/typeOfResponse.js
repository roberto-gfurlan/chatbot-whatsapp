const { TextContent, FileContent } = require("@zenvia/sdk");

// const typeOfAttachment = {
//   image: new FileContent(data.context.image, "image/jpeg")
// }

// function typeOfAttachment(context) {
//   if (data.context.image) {
//     answer.push(new FileContent(data.context.image, "image/jpeg"));
//   }
//   if (data.context.preview) {
//     answer.push(new FileContent(data.context.preview, "audio/mpeg"));
//   }
// }

function typeOfMessage(output) {
  if (output.type === "text") {
    return new TextContent(output.text);
  }
  // if (output.type === "select") {
  //   const customButton = output.payload.options.map((button) => {
  //     return {
  //       id: button.value,
  //       title: button.title,
  //     };
  //   });
  //   answer.push({
  //     menu: true,
  //     from: data.context.to,
  //     to: data.context.from,
  //     contents: [
  //       {
  //         type: "button",
  //         body: output.payload.pick,
  //         buttons: customButton,
  //       },
  //     ],
  //   });
  // }
}
async function typeOfResponse(data) {
  let answer = [];
  if (data.output && data.output.length > 0) {
    for (let output of data.output) {
      answer.push(typeOfMessage(output));
    }
  }
  return answer;
}
module.exports = typeOfResponse;
