import axios from "axios";

export const authApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
  headers: {
    "Content-Type": "application/json"
  }
});

const accessToken = localStorage.getItem("accessToken");
authApi.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  },
  function (error) {
    if (!accessToken) {
      alert("인증이 필요합니다");
    }
    return Promise.reject(error);
  }
);
