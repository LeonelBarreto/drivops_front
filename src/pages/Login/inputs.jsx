import React, { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { At, Eye, EyeSlash, Lock } from "phosphor-react";

const inputStyle = {
  borderColor: "#000000",
  marginBottom: "40px",
  "& fieldset.MuiOutlinedInput-notchedOutline": {
    fontSize: "1.8rem",
  },
  "& div.MuiInputBase-root": {
    fontSize: "1.3rem",
    fontWeight: 400,
  },
  "& label.MuiInputLabel-root": {
    fontFamily: "Open Sans",
    fontWeight: 400,
    fontSize: "1.5rem",
    marginTop: -0.5,
    transition: "all 0.3s",
  },
  "& label.Mui-focused": {
    fontWeight: 600,
    fontSize: "1.5rem",
    color: "#000000",
  },
  "& .MuiOutlinedInput-root": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(0, 0, 0, 0.5)",
    },
    "& fieldset": {
      borderRadius: "0.8rem",
    },
  },
};

export default function Inputs({ form, setForm }) {
  const [showPassword, setShowPassword] = useState(false);
  const handleChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <TextField
        label="Email"
        name="email"
        fullWidth
        value={form.email}
        onChange={handleChangeInput}
        sx={inputStyle}
        type={"email"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <At size={24} />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Password"
        name="password"
        fullWidth
        value={form.password}
        onChange={handleChangeInput}
        sx={inputStyle}
        type={showPassword ? "text" : "password"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock size={24} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              onClick={() => setShowPassword(!showPassword)}
              sx={{ cursor: "pointer" }}
            >
              {showPassword ? <Eye size={24} /> : <EyeSlash size={24} />}
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}
