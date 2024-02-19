import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const studentApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const studentDetails = db.studentStore.getAllStudents();
      return studentDetails;
    },
  },

  makeStudent: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const studentDetail = await db.studentStore.studentDetail(
        request.payload.firstname,
        request.payload.college,
        request.payload.year,
        request.payload.information,
      );
      return studentDetail;
  },
},

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await db.studentStore.deleteAll();
      return { success: true };
    },
  },
};