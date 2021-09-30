import getUser from "cgps-application-server/middleware/get-user";

import { sendEmailMessage } from "../../../services/email-messages";
import serverRuntimeConfig from "../../../utils/server-runtime-config";

export default async function (req, res) {
  const user = await getUser(req, res);

  const { feedbackText, emailAddress, screenshotImage } = req.body;

  const attachments = [];
  if (screenshotImage) {
    attachments.push({
      data: screenshotImage,
      name: "Screenshot.png",
    });
  }

  const emailText = [];
  emailText.push(feedbackText);
  emailText.push("");
  emailText.push(`Email address: ${emailAddress}`);
  if (user) {
    emailText.push(`User: ${user.id} (${user.email})`);
  }
  for (const key of [ "accept-language", "referer", "user-agent" ]) {
    emailText.push(`${key}: ${req.headers[key]}`);
  }

  await sendEmailMessage(
    {
      to: serverRuntimeConfig.helpDesk.email,
      replyTo: emailAddress || (user?.email) || undefined,
    },
    {
      subject: serverRuntimeConfig.helpDesk.subject,
      text: emailText.join(" \\\n"),
      html: null /* html */,
    },
    attachments,
  );

  res.status(200).send();
}
