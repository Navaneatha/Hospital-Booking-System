import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import BookAppointment from "./pages/BookAppointment";
import DoctorSchedule from "./pages/DoctorSchedule";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import PatientRegister from "./pages/PatientRegister";
import PatientDashboard from "./pages/PatientDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/book/:doctorId" element={<BookAppointment />} />
        <Route path="/schedule/:doctorId" element={<DoctorSchedule />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />

<Route path="/register" element={<PatientRegister/>}/>

<Route
path="/dashboard"
element={
<ProtectedRoute>
<PatientDashboard/>
</ProtectedRoute>
}
/>



      </Routes>
    </Router>
  );
}

export default App;