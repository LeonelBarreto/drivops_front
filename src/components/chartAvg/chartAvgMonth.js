import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Filler } from "chart.js";
import { Pie } from "react-chartjs-2";
import baseApi from "../../services/api";
import { useEffect, useState } from "react";



ChartJS.register(ArcElement, Tooltip, Legend, Filler);

export default function AvgSalesByMonth() {
  const [avgSalesMont, setAvgSalesMont] = useState([]);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await baseApi.get("/dashboard/avgByMonth", {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });
        setAvgSalesMont(response.data);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const dataMonth = avgSalesMont.map((item) => {
    return item.month;
  })

  const dataValues = avgSalesMont.map((item) => {
    return item.avg;
  })

  console.log(dataValues)
  const data = {
    labels: dataMonth,
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