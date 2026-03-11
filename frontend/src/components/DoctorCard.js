import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Box,
  Chip
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function DoctorCard({ doctor }) {

  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 320,
        margin: "auto",
        borderRadius: 3,
        boxShadow: 4
      }}
    >

      <CardMedia
        component="img"
        height="220"
        image="https://img.freepik.com/free-photo/doctor-smiling-with-stethoscope_1154-36.jpg"
        alt="doctor"
      />

      <CardContent>

        <Typography variant="h6" fontWeight="bold">
          Dr. {doctor.name}
        </Typography>

        <Box sx={{ mt: 1, mb: 2 }}>
          <Chip
            label={doctor.specialization}
            color="primary"
          />
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{ mb: 1 }}
          onClick={() => navigate(`/book/${doctor.id}`)}
        >
          Book Appointment
        </Button>

        <Button
          fullWidth
          variant="outlined"
          onClick={() => navigate(`/schedule/${doctor.id}`)}
        >
          View Schedule
        </Button>

      </CardContent>
    </Card>
  );
}

export default DoctorCard;