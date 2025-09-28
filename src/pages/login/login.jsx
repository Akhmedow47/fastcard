import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BaseApi, MyAxios, SaveToken } from "../../utils/token";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");

  async function Log(user) {
    try {
      const { data } = await axios.post(`${BaseApi}/Account/login`, user);
      SaveToken(data.data);
    localStorage.setItem("userName", user.userName);

      navigate(-1);
    } catch (error) {
      console.error(error);
      setErrorMsg("Invalid username or password");
    }
  }

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    Log(formData); // call login
  };

  // cart request (not on login button)
  async function getCart() {
    try {
      const { data } = await MyAxios.get(`/Cart/get-products-from-cart`);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 8 }}>
      <Typography variant="h5" gutterBottom>
        Log in to Exclusive
      </Typography>
      <Typography variant="body2" gutterBottom>
        Enter your details below
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Email or phone number"
          name="userName"
          type="text"
          margin="normal"
          value={formData.userName}
          onChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
          required
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          margin="normal"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {errorMsg && (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>
            {errorMsg}
          </Typography>
        )}

        <Typography
          className="text-red-600 flex justify-center py-3 cursor-pointer"
          onClick={() => alert("Maram Namedonm")}
        >
          Forget the password ?
        </Typography>

        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 3 }}
        >
          Login
        </Button>
      </Box>
    </Paper>
  );
};

export default Login;
