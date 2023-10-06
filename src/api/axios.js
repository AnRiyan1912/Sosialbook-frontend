import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:1919",
  headers: { Authorization: `Bearer ${localStorage.getItem("auth")}` },
});
