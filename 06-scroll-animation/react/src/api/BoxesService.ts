import axios from "axios";

const BoxesService = {
  getData: async () => {
    return axios
      .get("/boxes", { baseURL: "http://localhost:3000" })
      .then((response) => {
        return response;
      });
  },
};

export default BoxesService;
