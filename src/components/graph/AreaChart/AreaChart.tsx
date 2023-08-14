import React from "react";
import { AreaChartProps } from "./AreaChart.types";
import { CartesianGrid, Legend, Area, ResponsiveContainer, Tooltip, XAxis, YAxis, AreaChart as RAreaChart } from "recharts";
import { DefaultMargins, QualitativeColorPallete } from "components/utils/DefaultParemeters";
import { numericValueFormatter } from "components/utils/AxisFormatter";
import { FrolicTooltip } from "components/utils/AxisFormatter";


/**
 * 
 */
const AreaChart: React.FC<AreaChartProps> = ({
  data,
  metrics,
  dimensions,
  labelNames,    
  dimensionsNames,
  className = "w-full h-80",
  colors = QualitativeColorPallete,
  margin = DefaultMargins,
  ...props
}) => {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RAreaChart
          data={data}
          margin={margin}
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
          <YAxis tickFormatter={numericValueFormatter} />
          <Tooltip content={<FrolicTooltip />} />
          <Legend iconType="circle" />

          {metrics.map((metric, index) => (
            <Area type="monotone" key={index} dataKey={metric} stroke={colors[index % colors.length]} fillOpacity={1} fill={`url(#color${index})`} />
          ))}

          {dimensionsNames.map((dimension, index) => (
            <Tooltip
              key={index}
              contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
              formatter={(value, name, entry) => {
                const customDimensionName = dimensionsNames && dimensionsNames[index]
                  ? dimensionsNames[index]
                  : name;
                  const typedEntry = entry as any;
                const customLabelName = labelNames && labelNames[index]
                  ? labelNames[index]
                  : typedEntry[dimensionsNames[0]];

                return [customDimensionName, customLabelName, value];
              }}
              labelFormatter={() => null}
              separator=""
              position={{ x: 0, y: 0 }}
            />
          ))}
        </RAreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default AreaChart;