import { db } from "../db.js";

export const accountsController = {
  index: {
    auth: false,
    handler: function (request, h) {
      return h.view("Main", { title: "Welcome to SpareRoom" });
    },
  },
  showStudentSignup: {
    auth: false,
    handler: function (request, h) {
      return h.view("studentSignup", { title: "Sign up for SpareRoom" });
    },
  },
  studentSignup: {
    auth: false,
    handler: async function (request, h) {
      const user = request.payload;
      await db.userStore.addUser(user);
      return h.redirect("/studentDetails");
    },
  },
  showHomeownerSignup: {
    auth: false,
    handler: function (request, h) {
      return h.view("homeownerSignup", { title: "Sign up for SpareRoom" });
    },
  },
    homeownerSignup: {
      auth: false,
      handler: async function (request, h) {
        const user = request.payload;
        await db.userStore.addUser(user);
        return h.redirect("/advert");
      },
  },

  showLogin: {
    auth: false,
    handler: function (request, h) {
      return h.view("Login", { title: "Login to SpareRoom" });
    },
  },
  login: {
    auth: false,
    handler: async function (request, h) {
      const { email, password } = request.payload;
      const user = await db.userStore.getUserByEmail(email);
      if (!user || user.password !== password) {
        return h.redirect("/");
      }
      request.cookieAuth.set({ id: user._id });
      return h.redirect("/report");
    },
  },
  logout: {
    handler: function (request, h) {
      request.cookieAuth.clear();
      return h.redirect("/");
    },
  },

  async validate(request, session) {
    const user = await db.userStore.getUserById(session.id);
    if (!user) {
      return { isValid: false };
    }
    return { isValid: true, credentials: user };
  },
};