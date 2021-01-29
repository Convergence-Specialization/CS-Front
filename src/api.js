import axios from "axios";

const api = axios.create({
  // baseURL: "https://convergence-ssu.herokuapp.com/",
  baseURL: "http://localhost:5000",
});

const getBearer = () => `Bearer ${localStorage.getItem("idToken")}`;

export const departMajorApi = {
  create: (body) =>
    api.post("board/departmajor/create", body, {
      headers: {
        Authorization: getBearer(),
      },
    }),
};
