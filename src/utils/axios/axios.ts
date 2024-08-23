import axios from "axios";

const instance = axios.create({
  baseURL: "http://185.233.117.23:5555/",
});

export default instance;
