import React from "react";
import { LineChartProps } from "./LineChart.types";
import { CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart as RLineChart } from "recharts";
import { DivergentColorPallete } from "components/utils/DefaultParemeters";

const LineChart: React.FC<LineChartProps> = ({
  data,
  metrics,
  dimensions,
  colors = DivergentColorPallete,
  ...props
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RLineChart
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
          <>
            <Line key={index} dataKey={metric} stroke={colors[index % colors.length]} activeDot={{ r: 4 }} />
          </>
        ))}

      </RLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
