import { useState } from "react";
import { register } from "../services/api";
import {
Container,
TextField,
Button,
Typography,
Paper,
MenuItem
} from "@mui/material";

function Register(){

const [user,setUser] = useState({
username:"",
password:"",
role:"PATIENT"
});

const handleRegister = async () => {

await register(user);

alert("Registration Successful");

};

return(

<Container maxWidth="sm">

<Paper elevation={4} sx={{padding:4,marginTop:10}}>

<Typography variant="h4" gutterBottom>
Register
</Typography>

<TextField
label="Username"
fullWidth
margin="normal"
onChange={(e)=>setUser({...user,username:e.target.value})}
/>

<TextField
label="Password"
type="password"
fullWidth
margin="normal"
onChange={(e)=>setUser({...user,password:e.target.value})}
/>

<TextField
select
label="Role"
fullWidth
margin="normal"
defaultValue="PATIENT"
onChange={(e)=>setUser({...user,role:e.target.value})}
>

<MenuItem value="PATIENT">Patient</MenuItem>
<MenuItem value="DOCTOR">Doctor</MenuItem>
<MenuItem value="ADMIN">Admin</MenuItem>

</TextField>

<Button
variant="contained"
fullWidth
sx={{marginTop:2}}
onClick={handleRegister}
>

Register

</Button>

</Paper>

</Container>

);

}

export default Register;