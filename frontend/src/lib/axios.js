import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;

// import axios from "axios";

// const BASE_URL =
//   import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api";

// const api = axios.create({
//   baseURL: BASE_URL,
// });

// export default api;
