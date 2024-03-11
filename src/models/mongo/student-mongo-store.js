import { StudentDetail } from "./studentDetail.js";

export const studentMongoStore = {
    async getAllStudents() {
        const studentDetails = await StudentDetail.find().populate("student").lean();
        return studentDetails;
    },

    async getStudentDetailById(id) {
        if (id) {
            const studentDetail = await StudentDetail.findOne({ _id: id}).lean();
            return studentDetail;
        }
        return null;
    },

    async makeStudentDetail(firstName, college, year, information, student) {
     const newStudentDetail = new StudentDetail({
        firstName,
        college,
        year,
        information,
        student: student._id,
        // img,
     });
     await newStudentDetail.save();
     return newStudentDetail;
},

    async updateStudentDetail(studentDetail, updatedStudentDetail) {
     studentDetail.firstName = updatedStudentDetail.firstName;
     studentDetail.college = updatedStudentDetail.college;
     studentDetail.year = updatedStudentDetail.year;
     studentDetail.information = updatedStudentDetail.information;
     studentDetail.student = updatedStudentDetail.student;
     // studentDetail.img = updatedStudentDetail.img;
     await studentDetail.save();
 },

    async deleteAll() {
     await StudentDetail.deleteMany({});
    },
};