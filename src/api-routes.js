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
  { method: "POST", path: "/api/{id}/advert", config: advertsApi.makeAdvert },
  { method: "DELETE", path: "/api/advert", config: advertsApi.deleteAll },

  { method: "GET", path: "/api/studentDetail", config: studentApi.findAll},
  { method: "POST", path: "/api/{id}/studentDetail", config: studentApi.makeStudentDetail },
  { method: "DELETE", path: "/api/studentDetail", config: studentApi.deleteAll },
];