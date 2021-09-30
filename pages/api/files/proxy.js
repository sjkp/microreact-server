import ProxyService from "../../../services/proxy-service";

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async function (req, res) {
  const response = await ProxyService.getStream(req.query.url);

  res.status(response.status);

  if (response.headers) {
    for (const [ key, value ] of Object.entries(response.headers)) {
      res.setHeader(key, value);
    }
  }

  response.stream.pipe(res);
}
