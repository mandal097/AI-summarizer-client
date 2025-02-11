import axios from "axios";

// export const apiHost = "http://192.168.1.13:3000/api";
// export const apiHost = "http://localhost:3000/api";
export const apiHost = "http://13.201.115.148:3000/api/api";
// export const apiHost = "https://ai-summarizer-5kak.onrender.com/api";

const ax = axios.create({
  baseURL: apiHost,
});

export { ax };
