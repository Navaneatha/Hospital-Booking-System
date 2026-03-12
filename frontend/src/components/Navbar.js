import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <AppBar position="sticky">

      <Toolbar>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          🏥 Hospital System
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Home
        </Button>

        <Button color="inherit" component={Link} to="/doctors">
          Doctors
        </Button>

        <Button color="inherit" component={Link} to="/admin">
          Admin
        </Button>
        <Typography sx={{flexGrow:1}}>
Hospital System
</Typography>

<Button color="inherit" href="/login">
Login
</Button>

<Button color="inherit" href="/register">
Register
</Button>
        

      </Toolbar>

    </AppBar>
  );
}

export default Navbar;