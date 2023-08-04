import React from "react";
import { PieChartProps } from "./PieChart.types";
import { CartesianGrid, Legend, ResponsiveContainer, Tooltip, PieChart as RPieChart, Cell, Pie } from "recharts";
import { DivergentColorPallete } from "components/utils/DefaultParemeters";

const PieChart: React.FC<PieChartProps> = ({
  data,
  metrics,
  dimensions,
  className = "w-full h-80",
  radius = 80,
  colors = DivergentColorPallete,
  ...props
}) => {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RPieChart
          data={data}

          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 15,
          }}
        >

          <Pie
            data={data}
            dataKey={metrics[0]}
            nameKey={dimensions[0]}
            cx="50%"
            cy="50%"
            outerRadius={radius}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </RPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
