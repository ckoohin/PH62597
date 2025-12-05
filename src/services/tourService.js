import api from "./api";

export async function getTours() {
  const { data } = await api.get("/tours");
  return data;
}

export async function getTourById(id) {
  const { data } = await api.get(`/tours/${id}`);
  return data;
}

export async function createTour(tour) {
  const { data } = await api.post("/tours", tour);
  return data;
}

export async function updateTour(id, tour) {
  const { data } = await api.put(`/tours/${id}`, tour);
  return data;
}

export async function patchTour(id, patch) {
  const { data } = await api.patch(`/tours/${id}`, patch);
  return data;
}

export async function deleteTour(id) {
  const { data } = await api.delete(`/tours/${id}`);
  return data;
}