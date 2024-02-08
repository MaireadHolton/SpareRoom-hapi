import { accountsController } from "./models/controllers/accounts-controller.js";
import { advertController } from "./models/controllers/advert-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/studentSignup", config: accountsController.showStudentSignup },
  { method: "GET", path: "/homeownerSignup", config: accountsController.showHomeownerSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/registerStudent", config: accountsController.studentSignup },
  { method: "POST", path: "/registerHomeowner", config: accountsController.homeownerSignup },
  { method: "POST", path: "/authenticate", config: accountsController.login },

  { method: "GET", path: "/advert", config: advertController.index },
  { method: "POST", path: "/advert", config: advertController.advert },
  { method: "POST", path: "/studentDetail", config: advertController.studentDetail },
  { method: "GET", path: "/report", config: advertController.report },

  {
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: "./public",
      },
    },
    options: { auth: false },
  },
];