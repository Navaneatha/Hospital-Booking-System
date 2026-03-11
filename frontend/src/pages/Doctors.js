import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { getDoctors } from "../services/api";
import DoctorCard from "../components/DoctorCard";

function Doctors() {

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors()
      .then((res) => setDoctors(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container sx={{ mt: 4 }}>

      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 4 }}
      >
        Our Doctors
      </Typography>

      <Grid container spacing={4}>

        {doctors.map((doctor) => (
          <Grid item xs={12} sm={6} md={4} key={doctor.id}>
            <DoctorCard doctor={doctor} />
          </Grid>
        ))}

      </Grid>

    </Container>
  );
}

export default Doctors;