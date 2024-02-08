import { userMongoStore } from "./mongo/user-mongo-store.js";
import { connectMongo } from "./mongo/connect.js";
import { advertMongoStore } from "./mongo/advert-mongo-store.js";
import { studentMongoStore } from "./mongo/student-mongo-store.js";

export const db = {
  userStore: null,
  advertStore:null,
  studentStore:null,

  init(storeType) {
    switch (storeType) {
      case "mongo":
        this.userStore = userMongoStore;
        this.advertStore = advertMongoStore;
        this.studentStore = studentMongoStore;
        connectMongo();
        break;
      default:
    }
  },
};