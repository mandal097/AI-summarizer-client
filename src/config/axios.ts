import axios from "axios";

// export const apiHost = "http://192.168.1.13:3000/api";
// export const apiHost = "http://localhost:3000/api";
export const apiHost = "http://15.206.80.75:3000/api";

const ax = axios.create({
  baseURL: apiHost,
});

export { ax };
