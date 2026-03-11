import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  MenuItem
} from "@mui/material";
import axios from "axios";

function AppointmentForm({ doctorId }) {

  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const slots = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM"
  ];

  const handleSubmit = async () => {

    const appointment = {
      doctorId,
      patientName,
      date,
      timeSlot
    };

    const res = await axios.post(
      "http://localhost:8080/appointments/book",
      appointment
    );

    alert(res.data);
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "auto", mt: 4 }}>

      <CardContent>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Book Appointment
        </Typography>

        <TextField
          label="Patient Name"
          fullWidth
          sx={{ mb: 2 }}
          onChange={(e) => setPatientName(e.target.value)}
        />

        <TextField
          type="date"
          fullWidth
          sx={{ mb: 2 }}
          onChange={(e) => setDate(e.target.value)}
        />

        <TextField
          select
          label="Select Time Slot"
          fullWidth
          sx={{ mb: 2 }}
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
        >
          {slots.map((slot) => (
            <MenuItem key={slot} value={slot}>
              {slot}
            </MenuItem>
          ))}
        </TextField>

        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
        >
          Confirm Appointment
        </Button>

      </CardContent>

    </Card>
  );
}

export default AppointmentForm;