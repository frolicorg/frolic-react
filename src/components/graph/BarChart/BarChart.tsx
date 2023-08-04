import React from "react";
import { BarChartProps } from "./BarChart.types";
import { CartesianGrid, Legend, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart as RBarChart } from "recharts";
import { DivergentColorPallete } from "components/utils/DefaultParemeters";

const BarChart: React.FC<BarChartProps> = ({
  data,
  metrics,
  dimensions,
  className = "w-full h-80",
  colors = DivergentColorPallete,
  ...props
}) => {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RBarChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 15,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dimensions[0]} />
          <YAxis />
          <Tooltip />
          <Legend />

          {metrics.map((metric, index) => (
            <Bar dataKey={metric} key={index} fill={colors[index % colors.length]} />
          ))}

        </RBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
