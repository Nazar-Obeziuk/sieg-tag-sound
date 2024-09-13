import axios from "axios";

// connect to backend

const instance = axios.create({
  baseURL: "http://localhost:4550/api",
});

export default instance;
