import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button
} from "@mui/material";
import { getDoctors, addDoctor } from "../services/api";

function AdminDashboard() {

  const [doctors, setDoctors] = useState([]);
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = () => {
    getDoctors().then((res) => setDoctors(res.data));
  };

  const handleSubmit = async () => {

    const doctor = {
      name,
      specialization
    };

    await addDoctor(doctor);

    setName("");
    setSpecialization("");

    loadDoctors();

    alert("Doctor Added Successfully");
  };

  return (
    <Container sx={{ mt: 4 }}>

      <Typography variant="h4" sx={{ mb: 4 }}>
        Admin Dashboard
      </Typography>

      {/* ANALYTICS CARDS */}

      <Grid container spacing={3}>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: "#1976d2", color: "white" }}>
            <CardContent>
              <Typography variant="h6">
                Total Doctors
              </Typography>
              <Typography variant="h4">
                {doctors.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: "#2e7d32", color: "white" }}>
            <CardContent>
              <Typography variant="h6">
                Hospital Departments
              </Typography>
              <Typography variant="h4">
                5
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: "#ed6c02", color: "white" }}>
            <CardContent>
              <Typography variant="h6">
                System Status
              </Typography>
              <Typography variant="h4">
                Active
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

      {/* ADD DOCTOR FORM */}

      <Card sx={{ mt: 5, p: 3 }}>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Add New Doctor
        </Typography>

        <TextField
          label="Doctor Name"
          fullWidth
          sx={{ mb: 2 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Specialization"
          fullWidth
          sx={{ mb: 2 }}
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Add Doctor
        </Button>

      </Card>

    </Container>
  );
}

export default AdminDashboard;