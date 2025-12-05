import api from "./api";

export async function register({ email, password }) {
  const { data } = await api.post("/users", { email, password });
  return data;
}

export async function login({ email, password }) {
  const { data } = await api.get("/users", { email, password });
  return data;
}