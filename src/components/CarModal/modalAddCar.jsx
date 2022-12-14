import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import baseApi from "../../services/api";
import "../../styles/styles.css";

const labelStyles = {
  fontSize: "16px",
  fontWeight: 600,
};

const inputStyle = {
  borderColor: "#000000",
  marginBottom: "20px",
  "& fieldset.MuiOutlinedInput-notchedOutline": {
    fontSize: "1.8rem",
  },
  "& label.MuiInputLabel-root": {
    fontFamily: "Overlock",
    fontWeight: 400,
    fontSize: "1.8rem",
    marginTop: -0.2,
    transition: "all 0.3s",
  },
  "& label.Mui-focused": {
    fontWeight: 700,
    fontSize: "2rem",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "2rem",
    },
  },
  "& div.MuiSelect-select": {
    fontSize: "1.5rem",
    fontWeight: 400,
  },
  "& .MuiInputBase-root": {
    fontSize: "1.5rem",
    borderRadius: "2rem",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "2rem",
  },
};
export default function ModalAddCar() {
  const [form, setForm] = useState({ fabricante: "", modelo: "", estado: "", valor: 0, ano: "" });
  const [openModal, setOpenModal] = useState(false);
  const [colorAdornment, setColorAdornment] = useState("rgba(0, 0, 0, 0.54)");

  const handleChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setForm({ fabricante: "", modelo: "", estado: "", valor: 0, ano: "" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await baseApi.post("/carros", form, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button className="pattern_button" onClick={() => setOpenModal(true)}>
        + Cadastrar carro
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <form className="modal_form" onSubmit={handleSubmit}>
          <h1>CADASTRAR CARRO</h1>
          <TextField
            name="fabricante"
            label="Fabricante"
            fullWidth
            value={form.fabricante}
            onChange={handleChangeInput}
            type="text"
            sx={inputStyle}
          />
          <TextField
            name="modelo"
            label="Modelo"
            fullWidth
            value={form.modelo}
            onChange={handleChangeInput}
            type="text"
            sx={inputStyle}
          />
          <FormControl fullWidth>
            <InputLabel id="label-select-estado" sx={labelStyles}>
              Estado
            </InputLabel>
            <Select
              fullWidth
              name="estado"
              id="select-estado"
              labelId="label-select-estado"
              value={form.estado}
              label="Estado"
              onChange={handleChangeInput}
              sx={inputStyle}
            >
              <MenuItem value={"novo"}>Novo</MenuItem>
              <MenuItem value={"usado"}>Usado</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="valor"
            label="Valor"
            labelId=""
            fullWidth
            value={form.marca}
            onChange={handleChangeInput}
            type="text"
            sx={inputStyle}
            onFocus={() => setColorAdornment("#1976D2")}
            onBlur={() => setColorAdornment("rgba(0, 0, 0, 0.54)")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <strong style={{ color: colorAdornment, transition: "color 0.3s" }}>R$: </strong>
                </InputAdornment>
              ),
            }}
          />
          <FormControl fullWidth>
            <InputLabel id="select-ano" sx={labelStyles}>
              Ano
            </InputLabel>
            <Select
              fullWidth
              labelId="select-ano"
              name="ano"
              id="select-ano"
              value={form.ano}
              label="Ano"
              onChange={handleChangeInput}
              sx={inputStyle}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: "160px",
                  },
                },
              }}
            >
              {React.Children.toArray(
                Array(new Date().getFullYear() - 1968)
                  .fill(0)
                  .map((_, index) => (
                    <MenuItem key={index} value={1970 + index}>
                      {1970 + index}
                    </MenuItem>
                  ))
              )}
            </Select>
          </FormControl>
          <button className="pattern_button">Cadastrar</button>
        </form>
      </Modal>
    </>
  );
}
