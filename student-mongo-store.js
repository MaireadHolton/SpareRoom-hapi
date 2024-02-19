import { StudentDetail } from "./studentDetail.js";

export const studentMongoStore = {
    async getAllStudents() {
        const studentDetails = await StudentDetail.find().lean();
        return studentDetails;
    },

async StudentDetail(firstname, college, year, information, student) {
    const newStudentDetail = new StudentDetail({
        firstname,
        college,
        year,
        information,
        student: student._id
    });
    await newStudentDetail.save();
    return newStudentDetail;
},

async deleteAll() {
    await StudentDetail.deleteMany({});
},
};