import getUser from "cgps-application-server/middleware/get-user";

import { sendEmailMessage } from "../../../services/email-messages";
import serverRuntimeConfig from "../../../utils/server-runtime-config";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: serverRuntimeConfig.bodySizeLimit,
    },
  },
};

export default async function (req, res) {
  const user = await getUser(req, res);

  const { feedbackText, emailAddress, screenshotImage } = req.body;

  const attachments = [];
  if (screenshotImage) {
    attachments.push({
      path: screenshotImage,
      filename: "Screenshot.png",
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
    serverRuntimeConfig.helpDesk.email,
    {
      subject: serverRuntimeConfig.helpDesk.subject,
      text: emailText.join(" \\\n"),
      html: null /* html */,
    },
    attachments,
    emailAddress || (user?.email) || undefined,
  );

  res.status(200).send();
}
