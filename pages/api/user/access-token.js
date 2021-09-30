import createAccessToken from "cgps-application-server/middleware/create-access-token";

export default async function (req, res) {
  const accessToken = await createAccessToken(req, res);
  return res.json({ token: accessToken });
}
