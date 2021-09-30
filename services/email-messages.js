const path = require("path");
const EmailTemplates = require("email-templates");
const EmailJS = require("emailjs");

const serverRuntimeConfig = require("../utils/server-runtime-config");
const publicRuntimeConfig = require("../utils/public-runtime-config");

const dataUrlRegex = /^data:(.+);base64,(.+)$/i;

async function smtpServer(messageData) {
  return new Promise((resolve, reject) => {
    const server = EmailJS.server.connect(serverRuntimeConfig.smtp);
    server.send(messageData, (err, message) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(message);
      }
    });
  });
}

module.exports.sendEmailMessage = async function sendEmailMessage(to, message, attachments) {
  const toAddress = to.to ? to.to : to;
  const replyToAddress = to.replyTo ? to.replyTo : undefined;

  const smtpRequest = {
    text: message.text,
    from: serverRuntimeConfig.smtp.from,
    to: Array.isArray(toAddress) ? toAddress.join(", ") : toAddress,
    subject: message.subject,
    attachment: [],
  };

  if (message.html) {
    smtpRequest.attachment.push({
      data: message.html,
      alternative: true,
    });
  }

  if (Array.isArray(attachments)) {
    for (const item of attachments) {
      smtpRequest.attachment.push(item);
      const match = item.data.match(dataUrlRegex);
      if (match) {
        item.encoded = true;
        item.type = match[1];
        item.data = match[2];
      }
    }
  }

  if (replyToAddress) {
    smtpRequest["reply-to"] = replyToAddress;
  }

  const smtpResponse = await smtpServer(smtpRequest);

  return smtpResponse;
};

module.exports.renderEmailMessage = async function renderEmailMessage(templateName, data) {
  const email = new EmailTemplates({
    views: {
      root: path.resolve(".", "views", "emails"),
      options: {
        extension: "ejs",
      },
    },
  });

  const globalData = {
    baseUrl: publicRuntimeConfig.baseUrl,
  };

  const rendered = await email.renderAll(
    templateName,
    { ...globalData, ...data }
  );

  const { html, text, subject } = rendered;

  return { html, text, subject };
};
