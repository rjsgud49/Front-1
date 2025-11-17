import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.PROD
    ? "http://3.38.107.119:8080" // 배포용 (EC2)
    : "/api", // 개발용 (Vite proxy 사용)
  headers: { "Content-Type": "application/json" },
});
