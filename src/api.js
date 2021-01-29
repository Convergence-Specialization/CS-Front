import axios from "axios";

const api = axios.create({
  baseURL: "https://convergence-ssu.herokuapp.com/",
  // baseURL: "http://localhost:5000",
});

const getBearer = () => {
  // TODO: token expire 됐는지 확인 후 auth에서 재발급.
  return `Bearer ${localStorage.getItem("idToken")}`;
};

export const departMajorApi = {
  getLists: (body) => api.post("board/departmajor/listview", body),
  create: (body) =>
    api.post("board/departmajor/create", body, {
      headers: {
        Authorization: getBearer(),
      },
    }),
};
