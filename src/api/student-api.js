import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { StudentDetail } from "../models/mongo/studentDetail.js";

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

  findOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const studentDetail = await StudentDetail.findOne({ _id: request.params.id });
        if (!studentDetail) {
          return Boom.notFound("No Student with this id");
        }
        return studentDetail;
      } catch (err) {
        return Boom.notFound("No Student with this id");
      }
    },
  },

  makeStudentDetail: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const studentDetail = await db.studentStore.makeStudentDetail(
        request.payload.firstname,
        request.payload.college,
        request.payload.year,
        request.payload.information,
        request.auth.credentials,
      );
      return studentDetail;
  },
},

deleteOne: {
  auth: {
    strategy: "jwt",
  },
  handler: async function (request, h) {
    const response = await StudentDetail.deleteOne({ _id: request.params.id });
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
      await db.studentStore.deleteAll();
      return { success: true };
    },
  },
};