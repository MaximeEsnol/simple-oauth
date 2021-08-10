import { deleteAccessToken, postAccessToken } from "./routes/accesstoken";
import { getAuthenticatePage, postAuthenticatePage } from "./routes/authenticate";
import { getAuthorizePage } from "./routes/authorize";
import { getConfirmationPage, postConfirmationPage } from "./routes/confirm";
import { getPasswordRecoveryPage, postPasswordRecoveryPage } from "./routes/passwordrecovery";
import { deleteRefreshToken, postRefreshToken } from "./routes/refreshtoken";

const express = require("express");
const Router = express.Router();

export default (config: Config) => {
  // 1. Create or sync tables

  // 2. Set up routes 
  initializeRoutes(config.endpoints, Router);

  // 3. Return the router
  return Router;
}

const initializeRoutes = (routes: Endpoints, router: any) => {
  const addEndpointConfigToLocals = (req: any, res: any, next: any) => {
    res.locals.simpleOauth.endpoints = routes;
    next();
  }

  router.use(addEndpointConfigToLocals);

  // authentication routes
  router.get(routes.authenticate.url, getAuthenticatePage);
  router.post(routes.authenticate.url, postAuthenticatePage);

  // confirm already signed in routes
  router.get(routes.confirm.url, getConfirmationPage);
  router.post(routes.confirm.url, postConfirmationPage);

  // authorization code routes
  router.get(routes.authorization.url, getAuthorizePage);

  // password recovery routes
  router.get(routes.passwordRecovery.url, getPasswordRecoveryPage);
  router.post(routes.passwordRecovery.url, postPasswordRecoveryPage);

  // access token routes
  router.post(routes.accessToken.url, postAccessToken);
  router.delete(routes.accessToken.url, deleteAccessToken);

  // refresh token routes
  router.post(routes.refreshToken.url, postRefreshToken);
  router.delete(routes.refreshToken.url, deleteRefreshToken);
}