
// function music() {
//   if (music) {
//     let text = "";
//     if (music.artist) {
//       text = `${text}Artista: *${music.artist}*\n`;
//     }
//     if (music.title) {
//       text = `${text}Título: *${music.title}*\n`;
//     }
//     if (music.album) {
//       text = `${text}Álbum: *${music.album}*\n`;
//     }
//     content = [new TextContent(text)];
//     if (music.deezer && music.deezer.picture) {
//       content.push(new FileContent(music.deezer.picture, "image/jpeg"));
//     }
//     if (music.deezer && music.deezer.preview) {
//       content.push(new FileContent(music.deezer.preview, "audio/mpeg"));
//     }
// }


// function template(data) {
//   if (data.type === "select") {
//     const customButton = data.payload.options.map((button) => {
//       return {
//         id: button.value,
//         title: button.title,
//       };
//     });

//     return {
//       type: "button",
//       body: data.payload.pick,
//       buttons: customButton,
//     };
//   } else {
//     return { type: "text", text: data.text };
//   }

  
// }

// module.exports = template;
