// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL:
//     import.meta.env.MODE === "development"
//       ? "http://localhost:5002/api/v1"
//       : "/api/v1",
//   withCredentials: true,
// });

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5002/api/v1",
  withCredentials: true,
});
