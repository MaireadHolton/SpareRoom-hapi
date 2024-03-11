import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { Advert } from "../models/mongo/advert.js";

export const advertsApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const adverts = await db.advertStore.getAllAdverts();
      return adverts;
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

  makeAdvert: {
    auth: {
      strategy: "jwt",
    }, 
    handler: async function (request, h) {
      try {
      const {
        firstName,
        college,
        lat,
        lng,
        description,
        rules,
        price,
        available,
        img, // Include img in the payload
      } = request.payload;

      const { credentials } = request.auth;

      // Save advert to MongoDB
      const advert = await Advert.create({
        firstName,
        college,
        lat,
        lng,
        description,
        rules,
        price,
        available,
        img, // Save the image URL
        advertiser: credentials.id, // Assuming you store user ID in credentials
      });
      
      return advert;
    } catch (error) {
      console.error("Error creating advert:", error);
      return h.response({ error: "Internal Server Error" }).code(500);
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