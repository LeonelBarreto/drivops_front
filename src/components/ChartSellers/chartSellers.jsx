import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Filler } from "chart.js";
import { Pie } from "react-chartjs-2";
import baseApi from "../../services/api";
import { useEffect, useState } from "react";



ChartJS.register(ArcElement, Tooltip, Legend, Filler);

export default function RankingSellers() {
  const [rankSellers, setRankSellers] = useState([]);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await baseApi.get("/dashboard/topSellers", {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });
        setRankSellers(response.data);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const dataNames = rankSellers.map((item) => {
    return item.nome;
  })

  const dataValues = rankSellers.map((item) => {
    return item.sum;
  })

  const data = {
    labels: dataNames,
    datasets: [
      {
        label: "Total de Vendas em Reais",
        data: dataValues,
        backgroundColor: ["#7c2727", "#277c67", "#6b277c", "#27427c", "#737c27"],
        borderColor: ["rgba(0, 0, 0)"],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
}