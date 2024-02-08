import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const advertsApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const adverts = db.advertStore.getAllAdverts();
      return adverts;
    },
  },

  makeAdvert: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const advert = await db.advertStore.advert(
        request.payload.firstname,
        request.payload.college,
        request.payload.description,
        request.payload.rules,
        request.payload.price,
        request.payload.available,
        request.auth.credentials,
      );
      return advert;
  },
},

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await db.advertStore.deleteAll();
      return { success: true };
    },
  },
};