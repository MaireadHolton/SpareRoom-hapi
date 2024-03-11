import { accountsController } from "./models/controllers/accounts-controller.js";
import { advertController } from "./models/controllers/advert-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.Signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },

  { method: "GET", path: "/advert", config: advertController.index },
  { method: "POST", path: "/advert", config: advertController.makeAdvert },
  { method: "POST", path: "/student", config: advertController.makeStudentDetail },
  { method: "GET", path: "/report", config: advertController.report },

  {
    method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } },
    options: { auth: false },},
    
];