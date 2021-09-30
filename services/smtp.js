const email = require("emailjs");

const config = require("./config");

const dataUrlRegex = /^data:(.+);base64,(.+)$/i;

function createMessageData(to, subject, text, html, attachments) {
  const data = {
    text,
    from: config.smtp.from,
    to: Array.isArray(to) ? to.join(", ") : [ to ],
    subject,
    attachment: [],
  };

  if (html) {
    data.attachment.push({
      data: html,
      alternative: true,
    });
  }

  if (Array.isArray(attachments)) {
    for (const item of attachments) {
      data.attachment.push(item);
      const match = item.data.match(dataUrlRegex);
      if (match) {
        item.encoded = true;
        item.type = match[1];
        item.data = match[2];
      }
    }
  }

  return data;
}

module.exports = function (to, subject, text, html, attachments, replyTo) {
  return new Promise((resolve, reject) => {
    const messageData = createMessageData(to, subject, text, html, attachments);
    if (replyTo) {
      messageData["reply-to"] = replyTo;
    }
    const server = email.server.connect(config.smtp);
    server.send(messageData, (err, message) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(message);
      }
    });
  });
};
