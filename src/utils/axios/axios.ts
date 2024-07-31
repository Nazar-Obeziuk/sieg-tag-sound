import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4003/",
});

export default instance;
