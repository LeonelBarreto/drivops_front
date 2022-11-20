import { Modal } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import baseApi from "../../services/api";
import SelectCarModel from "./selectCarModel";
import SelectSeller from "./selectSeller";
import "../../styles/styles.css";

export default function ModalAddSell() {
  const [form, setForm] = useState({ carro: 0, vendedor: 0 });
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setForm({ carro: {}, vendedor: {} });
  }, []);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sellCar = async (infos) => {
    const token = localStorage.getItem("token");
    try {
      const response = await baseApi.post("/vendas", infos, {
        headers: {
          authorization: token,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sellCar({
      modelo_id: form.carro.id,
      vendedor_id: form.vendedor,
      data: new Date(),
      valor: form.carro.valor,
    });
  };
  return (
    <>
      <button className="pattern_button" onClick={() => setOpenModal(true)}>
        Cadastrar venda
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <form className="modal_form" onSubmit={handleSubmit}>
          <h1>Cadastrar Venda</h1>
          <SelectSeller selectedSeller={form.vendedor} handleChange={handleChange} />
          <SelectCarModel selectedCarModel={form.carro} handleChange={handleChange} />
          <button className="pattern_button">Vender</button>
        </form>
      </Modal>
    </>
  );
}
