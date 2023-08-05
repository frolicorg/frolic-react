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
          <defs>
            {QualitativeColorPallete.map((color, index) => (
              <linearGradient key={index} id={`color${index}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dimensions[0]} />
          <YAxis />
          <Tooltip />
          <Legend iconType="circle" />

          {metrics.map((metric, index) => (
            <Area type="monotone" key={index} dataKey={metric} stroke={colors[index % colors.length]} fillOpacity={1} fill={`url(#color${index})`} />
          ))}

        </RAreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChart;
