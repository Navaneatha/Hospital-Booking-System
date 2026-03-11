import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div>

      {/* HERO SECTION */}
      <Box
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1586773860418-d37222d8fce3)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center"
        }}
      >
        <div>
          <Typography variant="h3" fontWeight="bold">
            Hospital Appointment System
          </Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Book appointments with trusted doctors instantly
          </Typography>

          <Button
            variant="contained"
            sx={{ mt: 3 }}
            onClick={() => navigate("/doctors")}
          >
            View Doctors
          </Button>
        </div>
      </Box>

      {/* SERVICES SECTION */}
      <Container sx={{ mt: 6 }}>

        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 4 }}
        >
          Our Services
        </Typography>

        <Grid container spacing={4}>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  Expert Doctors
                </Typography>
                <Typography>
                  Highly qualified doctors with years of
                  experience in multiple specialties.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  Easy Appointment
                </Typography>
                <Typography>
                  Book appointments with doctors instantly
                  without waiting in queues.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  Digital Records
                </Typography>
                <Typography>
                  Maintain digital appointment history
                  and schedules easily.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>

      {/* CALL TO ACTION */}
      <Box
        sx={{
          backgroundColor: "#1976d2",
          color: "white",
          mt: 8,
          py: 6,
          textAlign: "center"
        }}
      >
        <Typography variant="h4">
          Need a Doctor Appointment?
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Book your appointment in just a few clicks.
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "white",
            color: "#1976d2"
          }}
          onClick={() => navigate("/doctors")}
        >
          Book Now
        </Button>
      </Box>

    </div>
  );
}

export default Home;