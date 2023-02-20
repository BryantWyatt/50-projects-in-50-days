import axios from "axios";
import { ISimpleResponse } from "../interface/ISimpleResponse";

const HelloWorldService = {
  getMessage: async () => {
    return axios
      .get<ISimpleResponse>("/simple", { baseURL: "http://localhost:3000" })
      .then((response) => {
        return response;
      });
  },
};

export default HelloWorldService;
