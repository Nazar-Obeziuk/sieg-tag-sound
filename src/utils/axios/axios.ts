import axios from "axios";

// connect to backend

const instance = axios.create({
  baseURL: "https://siegtagsound.com/api",
  // baseURL: "http://localhost:4550/api",
});

export default instance;
