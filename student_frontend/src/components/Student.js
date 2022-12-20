import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, FormControl, Paper } from "@material-ui/core";
// import { Paper } from '@mui/material';

export default function Student() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" }

  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [student, setStudent] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      window.alert("New Student Added")
      console.log("New Student Added")
    })
  }
  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setStudent(result);
    }
  )
  }, [])
  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <FormControl>
          <h1 style={{ color: "grey" }}>
            <u>Add Student Data</u>
          </h1>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Student Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Student Address"
              variant="outlined"
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Box>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </FormControl>
      </Paper>
      <br></br><br></br>
      <h1> Students List</h1>

      <Paper elevation={3} style={paperStyle }>

        {student.map(student=>(
            <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}}>
                Id:{student.id} <br></br>
                Name:{student.name}<br></br>
                Address:{student.address}<br></br>
            </Paper>
        ))}
      </Paper>
    </Container>
  );
}
