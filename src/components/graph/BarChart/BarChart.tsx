import React from "react";
import { BarChartProps } from "./BarChart.types";
import { CartesianGrid, Legend, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart as RBarChart } from "recharts";
import { DivergentColorPallete } from "components/utils/DefaultParemeters";

const BarChart: React.FC<BarChartProps> = ({
  data,
  metrics,
  dimensions,
  colors = DivergentColorPallete,
  ...props
}) => {
  return (
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
          <Bar dataKey={metric} fill={colors[index % colors.length]} />
        ))}

      </RBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
