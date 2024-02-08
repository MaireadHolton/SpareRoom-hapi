import { db } from "../db.js"

export const advertController = {
    index: {
      handler: async function (request, h) {
        const loggedInUser = request.auth.credentials;
        return h.view("Advert", { title: "Make an advert", user: loggedInUser });
      },
    },
    report: {
      handler: async function (request, h) {
        const adverts = await db.advertStore.getAllAdverts();
        return h.view("Report", {
          title: "Adverts to Date",
          adverts: adverts,
        });
      },
    },
    advert: {
      handler: async function (request, h) {
        try {
          const loggedInUser = request.auth.credentials;
          await db.advertStore.advert(loggedInUser._id, request.payload.firstname, request.payload.college, request.payload.rules, request.payload.price, request.payload.available);
          return h.redirect("/report");
        } catch (err) {
          return h.view("main", { errors: [{ message: err.message }] });
        }
      },
    },
    studentDetail: {
      handler: async function (request, h) {
        try {
          const loggedInUser = request.auth.credentials;
          await	db.studentStore.studentDetail(loggedInUser._id, request.payload.firstname, request.payload.college, request.payload.year, request.payload.information);
          return h.redirect("/report");
        } catch (err) {
          return h.view("main", { errors: [{ message: err.message }] });
        }
      },
    },
  };