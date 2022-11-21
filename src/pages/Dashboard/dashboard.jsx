import React from "react";
import ModalAddCar from "../../components/CarModal/modalAddCar";
import ModalAddSell from "../../components/SalesModal/modalAddSell";
import ModalAddSeller from "../../components/SellerModal/ModalAddSeller";
import "../../styles/styles.css";
import RankingSellers from "../../components/ChartSellers/chartSellers";
import SalesByMonth from "../../components/ChartSalesMonth/chartSalesMonth";
import AvgSalesByMonth from "../../components/chartAvg/chartAvgMonth";

export default function Dashboard() {
  
  return (
    <div className="container">
      <div className="container_dashboard">
        <div className="charts">
          <div className="chart-sellers">
            <h1>RANKING DE VENDEDORES</h1>
            <RankingSellers />
          </div>
          <div className="chart-sellers">
            <h1>VENDAS POR MÊS</h1>
            <SalesByMonth />
          </div>
          <div className="chart-sellers">
            <h1>MÉDIA DOS VALORES POR MÊS</h1>
              <AvgSalesByMonth />
          </div>
        </div>
        <footer>
          <ModalAddSell />
          <ModalAddSeller />
          <ModalAddCar />
        </footer>
      </div>
    </div>
  );
}
