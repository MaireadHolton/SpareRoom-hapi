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

    makeAdvert: {
      handler: async function (request, h) {
        try {
          const loggedInUser = request.auth.credentials;
          const advert = await db.advertStore.getAdvertById(request.params.advertid)
          await db.advertStore.makeAdvert(request.payload.firstname, request.payload.college, 
            request.payload.latitiude, request.payload.longitude, 
            request.payload.rules, request.payload.price, 
            request.payload.available, loggedInUser._id);
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
          await	db.studentStore.studentDetail(loggedInUser._id, 
            request.payload.firstname, request.payload.college, 
            request.payload.year, request.payload.information);
          return h.redirect("/report");
        } catch (err) {
          return h.view("main", { errors: [{ message: err.message }] });
        }
      },
    },
  };