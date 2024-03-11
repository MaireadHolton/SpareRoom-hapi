import { db } from "../db.js"
import { Advert } from "../mongo/advert.js";
import { StudentDetail } from "../mongo/studentDetail.js";

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
          await db.advertStore.makeAdvert(
            request.payload.firstName, request.payload.college,
            request.payload.lat, request.payload.lng,
            request.payload.description, request.payload.rules, request.payload.price,
            request.payload.available, loggedInUser._id
          );
          return h.redirect("/report");
        } catch (err) {
          return h.view("main", { errors: [{ message: err.message }] });
        }
      },
      },

    findOne: {
      auth: {
        strategy: "jwt",
      },
      handler: async function (request, h) {
        try {
          const advert = await Advert.findOne({ _id: request.params.id });
          if (!advert) {
            return Boom.notFound("No Advert with this id");
          }
          return advert;
        } catch (err) {
          return Boom.notFound("No Advert with this id");
        }
      },
    },

    deleteOne: {
      auth: {
        strategy: "jwt",
      },
      handler: async function (request, h) {
        const response = await Advert.deleteOne({ _id: request.params.id });
        if (response.deletedCount === 1) {
          return { success: true };
        }
        return Boom.notFound("id not found");
      },
    },

    makeStudentDetail: {
      auth: {
        strategy: "jwt",
      },
      handler: async function (request, h) {
      try{
          const loggedInUser = request.auth.credentials;
        await db.studentStore.makeStudentDetail(
          request.payload.firstName, 
          request.payload.college, 
          request.payload.year, 
          request.payload.information, 
          loggedInUser._id
          );
        return h.redirect("/report");
      } catch (err) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    } 
  },
};