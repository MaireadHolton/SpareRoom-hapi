import Hapi from "@hapi/hapi";
import Inert from "@hapi/inert";
import Vision from "@hapi/vision";
import Cookie from "@hapi/cookie";
import Handlebars from "handlebars";
import jwt from "hapi-auth-jwt2";

import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { accountsController } from "./models/controllers/accounts-controller.js";
import { webRoutes } from "./web-routes.js";
import { db } from "./models/db.js";
import { validate } from "./api/jwt-utils.js";
import { apiRoutes } from "./api-routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const result = dotenv.config();
if (result.error) {
  console.log(result.error.message);
}

async function init() {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    routes: { cors: true },
  });

  await server.register(Inert);
  await server.register(Vision);
  await server.register(Cookie);
  await server.register(jwt);

  server.views({
    engines: {
      hbs: Handlebars,
    },
    relativeTo: __dirname,
    path: "./pages",
    layoutPath: "./pages",
    partialsPath: "./pages/components",
    layout: true,
    isCached: false,
  });

  server.auth.strategy("session", "cookie", {
    cookie: {
      name: process.env.cookie_name,
      password: process.env.cookie_password,
      isSecure: false,
    },
    redirectTo: "/",
    validate: accountsController.validate,
  });
  server.auth.strategy("jwt", "jwt", {
    key: process.env.cookie_password,
    validate: validate,
    verifyOptions: { algorithms: ["HS256"] },
  });

  server.auth.default("session");

  db.init("mongo");

  server.route(apiRoutes);
  server.route(webRoutes);

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

await init();