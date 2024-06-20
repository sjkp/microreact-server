module.exports = {
  auth: {
    email: {
      server: {
        host: "mailhog",
        port: 1025,
        auth: {
          user: "user",
          pass: "test"
        },
        secure: false
      },
      from: "Microreact <noreply@microreact.org>",
      subject: "Login link for Microreact",
      text: "Hello!\nAccess your account here: http://localhost:80/auth/passwordless/callback?token=<%= tokenToSend %>&uid=",
      html: "views/emails/passwordless.html"
    },
    secret: process.env.AUTH_SECRET,
    session: {
      maxAge: 2592000,
      updateAge: 86400
    }
  },
  baseUrl: "https://dev2.sofi-platform.dk/",
  bodySizeLimit: "16mb",
  experimentalFlags: {
    publicFolders: false
  },
  helpDesk: {
    email: "support@microreact.org",
    subject: "Feedback from Microreact.org"
  },
  mapboxApiAccessToken: "pk.eyJ1IjoiY2dwc2RldiIsImEiOiJja2lhMndmN3AwbGpzMnhvNWZ0eWc3cWhoIn0.SDSaZCcDFP9s812jX1tzeA",
  mongodb: {
    url: process.env.MONGODB_CONNECTION,
    database: process.env.MONGODB_DATABASE
  },
  repoPath: "./files",
  showcaseFolders: [],
  smtp: {
    host: "mailhog",
    port: 1025,
    auth: {
      user: "user",
      pass: "test"
    },
    secure: false,
    from: "Microreact <noreply@microreact.org>"
  }
};