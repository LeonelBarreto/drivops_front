import { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseApi from "../../services/api";
import "../../styles/styles.css";
import Inputs from "./inputs";

export default function Login() {

  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await baseApi.post("/login", {
        email: form.email,
        senha: form.password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <form className="card-login" onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <Inputs form={form} setForm={setForm} />
        <button className="pattern_button" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
