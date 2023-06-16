import axios from "axios";

const SoundsService = {
  getSoundNames: async () => {
    return axios
      .get<string[]>(`/sounds`, { baseURL: "http://localhost:3000" })
      .then((response) => {
        return response;
      });
  },
};

export default SoundsService;
