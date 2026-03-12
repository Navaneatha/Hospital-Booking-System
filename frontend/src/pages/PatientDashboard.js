import React from "react";
import {Container,Typography,Paper,Button} from "@mui/material";

function PatientDashboard(){

const logout=()=>{
 localStorage.removeItem("token")
 window.location="/login"
}

return(

<Container>

<Paper sx={{padding:4,marginTop:5}}>

<Typography variant="h4">
Patient Dashboard
</Typography>

<Typography sx={{marginTop:2}}>
Welcome to Hospital System
</Typography>

<Button
variant="contained"
sx={{marginTop:2}}
onClick={()=>window.location="/history"}
>
View Appointment History
</Button>

<Button
variant="outlined"
sx={{marginLeft:2}}
onClick={logout}
>
Logout
</Button>

</Paper>

</Container>

)

}

export default PatientDashboard