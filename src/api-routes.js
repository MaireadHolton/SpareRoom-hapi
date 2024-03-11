import { userApi } from "./api/users-api.js";
import { advertsApi } from "./api/adverts-api.js";
import { studentApi } from "./api/student-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET", path: "/api/advert", config: advertsApi.findAll},
  { method: "GET", path: "/api/advert/{id}", config: advertsApi.findOne },
  { method: "POST", path: "/api/advert", config: advertsApi.makeAdvert },
  { method: "DELETE", path: "/api/advert/{id}", config: advertsApi.deleteOne },
  { method: "DELETE", path: "/api/advert", config: advertsApi.deleteAll },

  { method: "GET", path: "/api/student", config: studentApi.findAll},
  { method: "GET", path: "/api/student/{id}", config: studentApi.findOne },
  { method: "POST", path: "/api/student", config: studentApi.makeStudentDetail },
  { method: "DELETE", path: "/api/student/{id}", config: studentApi.deleteOne },
  { method: "DELETE", path: "/api/student", config: studentApi.deleteAll },
];