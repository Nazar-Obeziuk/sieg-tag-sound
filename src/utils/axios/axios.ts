import axios from "axios";

// connect to backend

const instance = axios.create({
  baseURL: "http://185.233.117.23:5555/",
});

export default instance;
