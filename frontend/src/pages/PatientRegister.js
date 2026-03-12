import React,{useState} from "react";
import {Container,TextField,Button,Typography,Paper} from "@mui/material";
import API from "../services/api";

function PatientRegister(){

const [name,setName]=useState("")
const [age,setAge]=useState("")
const [phone,setPhone]=useState("")

const handleSubmit=async()=>{

await API.post("/patients/register",{
 name,
 age,
 phone
})

alert("Patient Registered")

}

return(

<Container maxWidth="sm">

<Paper sx={{padding:4,marginTop:8}}>

<Typography variant="h4" align="center">
Patient Registration
</Typography>

<TextField
label="Name"
fullWidth
margin="normal"
onChange={(e)=>setName(e.target.value)}
/>

<TextField
label="Age"
fullWidth
margin="normal"
onChange={(e)=>setAge(e.target.value)}
/>

<TextField
label="Phone"
fullWidth
margin="normal"
onChange={(e)=>setPhone(e.target.value)}
/>

<Button
variant="contained"
fullWidth
sx={{marginTop:2}}
onClick={handleSubmit}
>
Register
</Button>

</Paper>

</Container>

)

}

export default PatientRegister