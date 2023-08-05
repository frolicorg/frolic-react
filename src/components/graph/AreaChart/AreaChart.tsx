import React from "react";
import { AreaChartProps } from "./AreaChart.types";
import { CartesianGrid, Legend, Area, ResponsiveContainer, Tooltip, XAxis, YAxis, AreaChart as RAreaChart } from "recharts";
import { QualitativeColorPallete } from "components/utils/DefaultParemeters";

const AreaChart: React.FC<AreaChartProps> = ({
  data,
  metrics,
  dimensions,
  className = "w-full h-80",
  colors = QualitativeColorPallete,
  ...props
}) => {
  return (
    <div className={className}>

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
          <Legend iconType="circle" />

          {metrics.map((metric, index) => (
            <Area type="monotone" key={index} dataKey={metric} fill={colors[index % colors.length]} stroke={colors[index % colors.length]} />
          ))}

        </RAreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChart;
