import React from "react";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const Chart = ({ coinHistory }) => {
  const coinPrice = [];
  const coinTime = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinTime.push(
      new Date(
        coinHistory?.data?.history[i].timestamp * 1000
      ).toLocaleDateString("en-US")
    );
  }

  const data = {
    labels: coinTime,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        reverse: true,
      },
    },
  };

  return (
    <div>
    
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
