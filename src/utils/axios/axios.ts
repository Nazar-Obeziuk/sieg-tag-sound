import axios from "axios";

// connect to backend

const instance = axios.create({
  baseURL: "https://siegtagsound.com/api",
});

export default instance;
