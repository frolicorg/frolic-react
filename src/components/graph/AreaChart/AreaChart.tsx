import React from "react";
import { AreaChartProps } from "./AreaChart.types";
import { CartesianGrid, Legend, Area, ResponsiveContainer, Tooltip, XAxis, YAxis, AreaChart as RAreaChart } from "recharts";
import { DivergentColorPallete } from "components/utils/DefaultParemeters";

const AreaChart: React.FC<AreaChartProps> = ({
  data,
  metrics,
  dimensions,
  colors = DivergentColorPallete,
  ...props
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RAreaChart
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
          <Area type="monotone" key={index} dataKey={metric} fill={colors[index % colors.length]} stroke={colors[index % colors.length]} />
        ))}

      </RAreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChart;
