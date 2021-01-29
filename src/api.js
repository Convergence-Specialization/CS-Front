import axios from "axios";

const api = axios.create({
  baseURL: "https://convergence-ssu.herokuapp.com/",
});

export const departMajorApi = {
  create: () => api,
};
