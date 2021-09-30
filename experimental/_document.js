import Document, { Html, Head, Main, NextScript } from "next/document";
import gravatar from "gravatar";

import config from "../utils/public-runtime-config";
// import applyMiddleware from "../middleware/apply-middleware";

const packageJson = require("../package.json");

const apiUrl = `${config.baseUrl}${config.baseUrl.endsWith("/") ? "" : "/"}api`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    // await applyMiddleware(ctx.req, ctx.res);
    const settings = {
      version: packageJson.version,
      webpack_hash: config.webpack_hash || "",
      assetsPath: config.assetsPath || "",
      googleAnalyticsAccount: config.googleAnalyticsAccount,
      baseUrl: config.baseUrl,
      // basePath: config.baseUrl.path.endsWith("/") ? config.baseUrl.path : `${config.baseUrl.path}/`,
      apiUrl,
      strategies: Object.keys(config.passport.strategies),
      isAuthenticated: ctx.req?.isAuthenticated(),
      user: (
        ctx.req?.user ?
          {
            provider: ctx.req.user.profile_type,
            name: ctx.req.user.name,
            email: ctx.req.user.email,
            photo: ctx.req.user.photo || gravatar.url(ctx.req.user.email),
            hasApiAccess: !!ctx.req.user.apiAccessToken,
            organisation: !!ctx.req.user.organisation,
            organisationName: ctx.req.user.organisation ? ctx.req.user.organisation.name : null,
            organisationLogo: ctx.req.user.organisation ? ctx.req.user.organisation.logo : null,
            organisationUrl: ctx.req.user.organisation ? ctx.req.user.organisation.url : null,
          } :
          null
      ),
      projectMetadata: ctx.req?.projectMetadata,
      // project: allowedRequestFields.reduce((project, field) => {
      //   project[field] = ctx.req.body[field];
      //   return project;
      // }, {}),
      options: {
        disableViewerDrawer: config.disableViewerDrawer,
        disableUploadPage: config.disableUploadPage,
        mapboxApiAccessToken: config.mapboxApiAccessToken,
      },
    };
    return {
      ...initialProps,
      settings,
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <script dangerouslySetInnerHTML={{
            __html: `window.Microreact=JSON.parse('${JSON.stringify(this.props.config)}');`,
          }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
