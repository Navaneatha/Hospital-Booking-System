import { useEffect, useState } from "react";
import { getDepartments } from "../services/api";
import {
Container,
Typography,
Grid,
Card,
CardContent
} from "@mui/material";

function Departments(){

const [departments,setDepartments] = useState([]);

useEffect(()=>{

getDepartments().then(res=>{
setDepartments(res.data);
});

},[]);

return(

<Container sx={{marginTop:5}}>

<Typography variant="h4" gutterBottom>
Hospital Departments
</Typography>

<Grid container spacing={3}>

{departments.map((dept)=>(

<Grid item xs={12} md={4} key={dept.id}>

<Card elevation={3}>

<CardContent>

<Typography variant="h6">
{dept.name}
</Typography>

</CardContent>

</Card>

</Grid>

))}

</Grid>

</Container>

);

}

export default Departments;