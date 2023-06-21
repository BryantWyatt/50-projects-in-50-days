import axios from "axios";

const DadJokesService = {
  getMessage: async () => {
    return axios
      .get<any>("", {
        baseURL: "https://icanhazdadjoke.com/",
        headers: config.headers,
      })
      .then((response) => {
        return response;
      });
  },
};

const config = {
  headers: {
    'Accept': 'application/json'
  }
}

export default DadJokesService;
