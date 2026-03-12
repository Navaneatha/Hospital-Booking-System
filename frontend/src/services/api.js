import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080"
});

export const getDoctors = () => API.get("/doctors");

export const addDoctor = (doctor) => API.post("/admin/doctor", doctor);

export const bookAppointment = (appointment) =>
  API.post("/appointments/book", appointment);

export const getDoctorAppointments = (doctorId) =>
  API.get(`/appointments/doctor/${doctorId}`);
// Patient
export const registerPatient = (data) =>
  API.post("/patients/register", data);

export const loginPatient = (data) =>
  API.post("/auth/login", data);

export default API;