import axios from "axios";

// connect to backend

const instance = axios.create({
  baseURL: "http://localhost:5555/",
});

export default instance;
