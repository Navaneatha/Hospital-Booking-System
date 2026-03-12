import React, {useState} from "react";
import {Container,TextField,Button,Typography,Paper} from "@mui/material";
import API from "../services/api";

function Login(){

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");

const handleLogin=async()=>{

 try{

 const res=await API.post("/auth/login",{
  username,
  password
 })

 localStorage.setItem("token",res.data.token)

 alert("Login Successful")

 window.location="/dashboard"

 }catch(err){

 alert("Invalid Login")

 }

}

return(

<Container maxWidth="sm">

<Paper sx={{padding:4,marginTop:8}}>

<Typography variant="h4" align="center">
Patient Login
</Typography>

<TextField
label="Username"
fullWidth
margin="normal"
onChange={(e)=>setUsername(e.target.value)}
/>

<TextField
label="Password"
type="password"
fullWidth
margin="normal"
onChange={(e)=>setPassword(e.target.value)}
/>

<Button
variant="contained"
fullWidth
sx={{marginTop:2}}
onClick={handleLogin}
>
Login
</Button>

</Paper>

</Container>

)

}

export default Login