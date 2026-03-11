import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import AppointmentForm from "../components/AppointmentForm";

function BookAppointment() {

  const { doctorId } = useParams();

  return (
    <Container>

      <Typography variant="h4" sx={{ mt: 4 }}>
        Appointment Booking
      </Typography>

      <AppointmentForm doctorId={doctorId} />

    </Container>
  );
}

export default BookAppointment;