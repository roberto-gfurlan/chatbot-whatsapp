const { TextContent, FileContent } = require("@zenvia/sdk");

function typeOfMessage(output) {
  if (output.type === "text") {
    return new TextContent(output.text);
  }
 }

 function typeOfResponse(data) {
  let answer = [];
  if (data.output && data.output.length > 0) {
    for (let output of data.output) {
      answer.push(typeOfMessage(output));
    }
    if (data.context.image) {
      answer.push(new FileContent(data.context.image, "image/jpeg"));
  
    }
    if (data.context.audio) {
      answer.push(new FileContent(data.context.audio, "audio/mpeg"));
    }
  }

  return answer;
}

module.exports = typeOfResponse;
