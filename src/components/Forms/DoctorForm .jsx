import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function DoctorForm(props) {
  const { changeTabTo } = props;

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [doctor, setDoctor] = useState({
    name: "",
    Phone: "",
    email: "",
    address: "",
    password: "",
    username: "",
    roleId: "1",
    role: "DOCTOR",
  });
  const { name, Phone, email, address, password, username } = doctor;
  const onInputChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/register", doctor);
    changeTabTo("1");
  };
 
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Box
       
        sx={{
          alignItems: 'center',
          "& .MuiTextField-root": { m: 1 },
        }}
        
      >
        <div>
          <TextField
           
            sx={{ m: 1, width: "40ch" }}
            id="outlined-disabled"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
            label="Name"
            defaultValue=""
            required

          />

          <TextField
            required
            sx={{ m: 1, width: "40ch" }}
            id="outlined-disabled"
            value={Phone}
            name="phone"
            onChange={(e) => onInputChange(e)}
            label="Mobile Number"
            defaultValue=""
          />
          <TextField
            required
            sx={{ m: 1, width: "40ch" }}
            type="email"
            id="outlined-disabled"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
            label="Email"
            defaultValue=""
          />
          <TextField
            sx={{ m: 1, width: "40ch" }}
            required
            id="outlined-disabled"
            name="address"
            value={address}
            onChange={(e) => onInputChange(e)}
            label="Living Address"
            defaultValue=""
          />
          <TextField
            required
            sx={{ m: 1, width: "40ch" }}
            id="outlined-disabled"
            label="User Name"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
            defaultValue=""
          />

          <FormControl
            sx={{ m: 1, width: "40ch" }}
            variant="outlined"
            required
            name="password"
            value={password}
            onChange={(e) => onInputChange(e)}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>

        <TextField
          name="role"
          value="DOCTOR"
          onChange={(e) => onInputChange(e)}
          disabled
          id="outlined-read-only-input"
          label="User Mode"
          defaultValue="DOCTOR"
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
      <Button
        sx={{ m: 1, width: "42ch" }}
        variant="contained"
        size="medium"
        type="submit"
      >
        Registor Doctor
      </Button>
    </form>
  );
}
