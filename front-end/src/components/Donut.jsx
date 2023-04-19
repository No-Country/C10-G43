import ReactApexChart from "react-apexcharts";
import { useState } from "react";

const Donut = ({ series, total }) => {
  const [options, setOptions] = useState({
    chart: {
      type: "donut",
    },
    series: series,
    labels: ["Alimentación", "Transporte", "Ocio"],
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              offsetY: 10,
            },
            total: {
              show: true,
              showAlways: true,
              label: total,
              fontSize: "22px",
              fontFamily: "Helvetica, Arial, sans-serif",
              color: "#fff",
              formatter: () => "",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
  });
  return (
    <div>
      <ReactApexChart
        options={options}
        series={options.series}
        type="donut"
        width={380}
      />
    </div>
  );
};

export default Donut;
