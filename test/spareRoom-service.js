import axios from "axios";
import { serviceUrl } from "./fixtures.js";

export const spareroomService = {
  spareroomUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.spareroomUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.spareroomUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    try {
      const res = await axios.get(`${this.spareroomUrl}/api/users`);
      return res.data;
    } catch (e) {
      return null;
    }
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.spareroomUrl}/api/users`);
    return res.data;
  },

  async authenticate(user) {
    const response = await axios.post(`${this.spareroomUrl}/api/users/authenticate`, user);
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common.Authorization = "";
  },

  async makeAdvert(id, advert){
    const response = await axios.post(`${this.spareroomUrl}/api/${id}/adverts`, advert);
    return response.data;
  },

  async getAdverts(id) {
    const response = await axios.get(`${this.spareroomUrl}/api/${id}/adverts`);
    return response.data;
  },

  async makeStudentDetail(id, studentDetail){
    const response = await axios.post(`${this.spareroomUrl}/api/${id}/student`, studentDetail);
    return response.data;
  },

  async getStudentDetails(id) {
    const response = await axios.get(`${this.spareroomUrl}/api/${id}/student`);
    return response.data;
  },
};