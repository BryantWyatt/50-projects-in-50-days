import axios from "axios";

const PanelsService = {
  getPanels: async () => {
    return axios
      .get("/panels", { baseURL: "http://localhost:3000" })
      .then((response) => {
        console.log("response");
        console.log(response);
        return response;
      });
  },
};

export default PanelsService;
